const express = require("express");
const router = express.Router();

const {
  createProduct,
  getAllProducts,
  qualifyProduct,
} = require("../controllers/productController");

// 👉 Registrar producto
router.post("/", createProduct);

// 👉 Obtener todos los productos
router.get("/", getAllProducts);

// 👉 Calificación
router.post("/qualify", qualifyProduct);

module.exports = router;
