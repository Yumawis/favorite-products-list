const express = require("express");
const router = express.Router();

const { addFavoriteProduct } = require("../controllers/favoriteController");

// 👉 Añadir producto favorito
router.put("/product/:userId", addFavoriteProduct);

module.exports = router;
