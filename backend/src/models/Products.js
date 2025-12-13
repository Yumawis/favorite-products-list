const mongoose = require("mongoose");

const STATUS = require("../constants/status");

const productsSchema = new mongoose.Schema(
  {
    productName: { type: String, trim: true, required: true },
    status: { type: String, enum: [STATUS], required: true },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productsSchema);
