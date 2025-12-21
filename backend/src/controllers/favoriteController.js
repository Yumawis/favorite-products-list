const User = require("../models/User");
const Product = require("../models/Product");
const FavoriteProduct = require("../models/FavoriteProduct");

const STATUS = require("../constants/status");

const { validateFavoriteProduct } = require("../validators/favoriteValidator");

// 👉 Agregar producto favorito
const addFavoriteProduct = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId } = req.body;

    const validationError = validateFavoriteProduct({ userId });

    if (validationError) {
      return res.status(400).json({
        data: {
          message: validationError,
        },
      });
    }

    const userExists = await User.exists({ _id: userId });

    if (!userExists) {
      return res.status(400).json({
        data: { message: "El usuario no existe" },
      });
    }

    const productExists = await Product.exists({
      _id: productId,
      status: STATUS.AVAILABLE,
    });

    if (!productExists) {
      return res.status(400).json({
        data: { message: "Producto no encontrado" },
      });
    }

    const { status } = productExists;

    if (status !== STATUS.AVAILABLE) {
      return res.status(400).json({
        data: { message: "No se puede agregar un producto no disponible" },
      });
    }

    const favoriteProduct = await FavoriteProduct.updateOne(
      {
        productId,
      },
      {
        $addToSet: { users: userId },
        $inc: { favoritesCount: 1 },
        $setOnInsert: { productId },
      },
      {
        upsert: true,
      }
    );

    if (favoriteProduct.matchedCount === 1 && favoriteProduct.modifiedCount === 0) {
      return res.status(400).json({
        data: { message: "El producto ya se encuentra en favoritos" },
      });
    }

    const favorite = await FavoriteProduct.findOne({ productId })
      .populate("productId")
      .sort({ favoritesCount: -1 });

    console.log("Producto agregado:", favoriteProduct);

    const response = {
      data: {
        message: "Producto agregado a favoritos",
        result: favorite,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    errorMessage = error.message;

    console.error("Error agregando el producto a favoritos", errorMessage);

    const response = {
      data: {
        message: "Ocurrió un error agregando el producto a favoritos",
        error: errorMessage,
      },
    };

    return res.status(422).json(response);
  }
};

module.exports = { addFavoriteProduct };
