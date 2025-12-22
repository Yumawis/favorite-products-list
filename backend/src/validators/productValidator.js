const mongoose = require("mongoose");

const validateQualify = ({ productId, qualifyNumber }) => {
  if (!productId || !mongoose.Types.ObjectId.isValid(productId))
    return "La variable productId es requerida";

  if (!qualifyNumber) return "La variable qualifyNumber es requerida";

  if (!Number.isFinite(qualifyNumber)) return "La variable qualifyNumber debe ser un número";

  if (qualifyNumber < 1 || qualifyNumber > 5)
    return "La variable qualifyNumber debe estar entre 1 y 5";
};

module.exports = { validateQualify };
