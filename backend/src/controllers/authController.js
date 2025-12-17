const User = require("../models/User");

// 👉 Registrar usuario
const signUp = async (req, res) => {
  try {
    const { names, lastNames, nickname, documentNumber } = req.body;

    const existingUser = await User.findOne({ documentNumber });

    if (existingUser) {
      return res.status(400).json({
        data: {
          message: "El número de documento ya se encuentra registrado",
        },
      });
    }

    const newUser = new User({
      names,
      lastNames,
      nickname,
      documentNumber,
    });

    const savedUser = await newUser.save();
    const currentUser = { id: savedUser._id };

    console.log("Usuario creado correctamente", currentUser);

    const response = {
      data: {
        message: "Usuario registrado correctamente",
        result: currentUser,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error.message;

    console.error("Error al registrar el usuario", errorMessage);

    const response = {
      data: {
        message: "Ocurrió un error al registrar el usuario",
        error: errorMessage,
      },
    };

    return res.status(422).json(response);
  }
};

// 👉 Iniciar sesión
const login = async (req, res) => {
  try {
    const { documentNumber } = req.body;

    // Busca al usuario por su DNI
    const user = await User.findOne({ documentNumber });

    if (!user) {
      return res.status(404).json({
        data: {
          message: "Usuario no encontrado",
        },
      });
    }

    console.log("Inicio de sesión:", documentNumber);

    const response = {
      data: {
        message: "Inicio de sesión exitoso",
        result: {
          id: user._id,
          nickname: user.nickname,
          documentNumber: user.documentNumber,
        },
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    const errorMessage = error.message;

    console.error("Error iniciando sesión", errorMessage);

    const response = {
      data: {
        message: "Ocurrió un error al iniciar sesión",
        error: errorMessage,
      },
    };

    return res.status(422).json(response);
  }
};

module.exports = { signUp, login };
