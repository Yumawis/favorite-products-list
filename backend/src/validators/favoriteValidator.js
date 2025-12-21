const mongoose = require("mongoose");

const validateFavoriteProduct = ({ userId, productId }) => {
  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) return "La variable userId es requerida";
  if (!productId || !mongoose.Types.ObjectId.isValid(productId))
    return "La variable productId es requerida";
};

module.exports = { validateFavoriteProduct };
