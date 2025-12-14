const express = require("express");
const router = express.Router();

const { createProduct, getAllProducts } = require("../controllers/productController");

// 👉 Registrar producto
router.post("/", createProduct);

// 👉 Obtener todos los productos
router.get("/", getAllProducts);

module.exports = router;
