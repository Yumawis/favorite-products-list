const mongoose = require("mongoose");

const favoriteProductSchema = new mongoose.Schema(
  {
    productId: { type: { type: mongoose.Schema.Types.ObjectId, ref: "Product" } },
    users: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }] },
    favoritesCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("FavoriteProduct", favoriteProductSchema);
