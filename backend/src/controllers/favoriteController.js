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

    const validationError = validateFavoriteProduct({ userId, productId });

    if (validationError) {
      return res.status(400).json({
        data: { message: validationError },
      });
    }

    const userExists = await User.exists({ _id: userId });

    if (!userExists) {
      return res.status(404).json({
        data: { message: "El usuario no existe" },
      });
    }

    const product = await Product.findOne({
      _id: productId,
      status: STATUS.AVAILABLE,
    });

    if (!product) {
      return res.status(404).json({
        data: { message: "Producto no encontrado o no disponible" },
      });
    }

    await FavoriteProduct.updateOne(
      { productId },
      { $setOnInsert: { productId } },
      { upsert: true }
    );

    const favoriteProduct = await FavoriteProduct.findOneAndUpdate(
      {
        productId,
        users: { $ne: userId },
      },
      {
        $addToSet: { users: userId },
        $inc: { favoritesCount: 1 },
      },
      { new: true }
    );

    if (!favoriteProduct) {
      return res.status(400).json({
        data: { message: "Ya guardaste este producto en favoritos" },
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
