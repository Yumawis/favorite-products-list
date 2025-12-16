const mongoose = require("mongoose");

const validateFavoriteProduct = ({ userId }) => {
  if (!userId || !mongoose.Types.ObjectId.isValid(userId)) return "La variable userId es requerida";
};

module.exports = { validateFavoriteProduct };
