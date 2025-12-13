const express = require("express");
const router = express.Router();

const { getAllProducts } = require("../controllers/productsController");

// 👉 Obtener todos los productos
router.get("/", getAllProducts);

module.exports = router;
