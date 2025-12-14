const mongoose = require("mongoose");

const STATUS = require("../constants/status");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, trim: true, required: true },
    status: { type: String, enum: [STATUS], required: true },
    stock: { type: Number, default: 0 },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
