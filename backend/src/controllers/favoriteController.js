const User = require("../models/User");
const Product = require("../models/Product");
const FavoriteProduct = require("../models/FavoriteProduct");

const STATUS = require("../constants/status");

const { validateFavoriteProduct } = require("../validators/favoriteValidator");

// 👉 Agregar producto favorito
const addFavoriteProduct = async (req, res) => {
  try {
    const { userId } = req.params;
    const { products } = req.body;

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

    const product = await Product.findById(products);

    if (!product) {
      return res.status(400).json({
        data: { message: "Producto no encontrado" },
      });
    }

    const { status } = product;

    if (status !== STATUS.AVAILABLE) {
      return res.status(400).json({
        data: { message: "No se puede agregar un producto no disponible" },
      });
    }

    const favoriteProduct = await FavoriteProduct.findOneAndUpdate(
      { userId },
      {
        $addToSet: { products },
        $setOnInsert: { userId },
      },
      { new: true, upsert: true }
    );

    if (favoriteProduct.modifiedCount === 0) {
      return res.status(400).json({
        message: "El producto ya se encuentra en la lista de favoritos",
      });
    }

    console.log("Producto agregado:", favoriteProduct);

    const response = {
      data: {
        message: "Producto agregado a favoritos",
        result: favoriteProduct,
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
