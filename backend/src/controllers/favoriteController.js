const User = require("../models/User");
const Product = require("../models/Product");

const FavoriteProduct = require("../models/FavoriteProduct");

// 👉 Agregar producto favorito
const addFavoriteProduct = async (req, res) => {
  try {
    const { userId } = req.params;
    const { productId, status } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        data: { message: "Usuario no encontrado" },
      });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(400).json({
        data: { message: "Producto no encontrado" },
      });
    }

    const favorite = await FavoriteProduct.findOne({ userId });

    if (favorite && favorite.productId.includes(productId)) {
      return res.status(400).json({
        data: { message: "El producto ya se encuentra en la lista de favoritos" },
      });
    }

    const availableProduct = await Product.findOne({ status });

    if (!availableProduct) {
      return res.status(400).json({
        data: { message: "El producto no se encuentra disponible" },
      });
    }

    const favoriteProduct = await FavoriteProduct.findOneAndUpdate(
      { userId },
      {
        $addToSet: { productId },
        $setOnInsert: { userId },
      },
      { new: true, upsert: true }
    );

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
