const Product = require("../models/Product");

const { validateQualify } = require("../validators/productValidator");

// 👉 Registrar producto
const createProduct = async (req, res) => {
  try {
    const { name, status, stock, image } = req.body;

    const existingProduct = await Product.findOne({ name });

    if (existingProduct) {
      return res.status(400).json({
        data: { message: "El producto ya se encuentra registrado" },
      });
    }

    const newProduct = new Product({
      name,
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
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "favoriteproducts",
          localField: "_id",
          foreignField: "productId",
          as: "favorite",
        },
      },

      {
        $addFields: {
          favoritesCount: {
            $ifNull: [{ $arrayElemAt: ["$favorite.favoritesCount", 0] }, 0],
          },
        },
      },

      {
        $sort: { favoritesCount: -1 },
      },

      {
        $project: {
          favorite: 0,
        },
      },
    ]);

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

// 👉 Calificación de productos
const qualifyProduct = async (req, res) => {
  try {
    const { productId, qualifyNumber } = req.body;

    const validationError = validateQualify({ productId, qualifyNumber });

    if (validationError) {
      return res.status(400).json({
        data: {
          message: validationError,
        },
      });
    }

    const product = await Product.findById(productId).select("qualifySum qualifyCount");

    if (!product) {
      return res.status(400).json({
        data: { message: "Error al encontrar producto" },
      });
    }

    const { qualifySum, qualifyCount } = product;

    let totalQualify = qualifySum + qualifyNumber;

    let currentCount = qualifyCount + 1;

    let averageQualify = totalQualify / currentCount;

    await product.updateOne({
      score: averageQualify,
      qualifySum: totalQualify,
      qualifyCount: currentCount,
    });

    const response = {
      data: {
        message: "Calificación realizada correctamente",
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error.message;

    console.error("Error al realizar la calificación:", errorMessage);

    const response = {
      data: {
        message: "Ocurrió un error al realizar la calificación",
        error: errorMessage,
      },
    };

    return res.status(422).json(response);
  }
};

module.exports = { createProduct, getAllProducts, qualifyProduct };
