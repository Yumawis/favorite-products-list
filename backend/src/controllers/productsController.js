const Products = require("../models/Products");

// 👉 Obtener todos los productos
const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();

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

module.exports = { getAllProducts };
