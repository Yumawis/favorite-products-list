const mongoose = require("mongoose");

const favoriteProductSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FavoriteProduct", favoriteProductSchema);
