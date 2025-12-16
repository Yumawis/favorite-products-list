const mongoose = require("mongoose");

const STATUS = require("../constants/status");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    stock: { type: Number, default: 0 },
    status: { type: String, enum: [STATUS], required: true },
    score: { type: Number, default: 0 },
    qualifySum: { type: Number, default: 0 },
    qualifyCount: { type: Number, default: 0 },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
