const Product = require("../models/Product");

// 👉 Registrar producto
const createProduct = async (req, res) => {
  try {
    const { productName, status, stock, image } = req.body;

    const existingProduct = await Product.findOne({ productName });

    if (existingProduct) {
      return res.status(400).json({
        data: { message: "El producto ya se encuentra registrado" },
      });
    }

    const newProduct = new Product({
      productName,
      status,
      stock,
      image,
    });

    const savedProduct = await newProduct.save();

    console.log("Producto registrado:", savedProduct);

    const response = {
      data: {
        message: "Producto registrado correctamente",
        result: savedProduct,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    errorMessage = error.message;

    console.error("Error registrando el producto");

    const response = {
      data: {
        message: "Ocurrió un error al registrar el producto",
        error: errorMessage,
      },
    };

    return res.status(422).json(response);
  }
};

// 👉 Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    console.log("Productos obtenidos:", products.length);

    const response = {
      data: {
        message: "Productos obtenidos correctamente",
        result: products,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error.message;

    console.error("Error al obtener los productos:", errorMessage);

    const response = {
      data: {
        message: "Ocurrió un error al obtener los productos",
        error: errorMessage,
      },
    };

    return res.status(422).json(response);
  }
};

module.exports = { createProduct, getAllProducts };
