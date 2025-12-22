// 🚀 Configuration server.js
require("dotenv").config();

const { appConfig } = require("./config/app.config.js");

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productRouter = require("./routes/productRouter");
const favoriteProductRouter = require("./routes/favoriteProductRouter");

// 🏗️ Initialize the Express application
const app = express();

const ALLOWED_CORS = appConfig.allowedCORS;
const PORT = appConfig.port;

// 🧩 Global Middlewares
app.use(
  cors({
    origin: ALLOWED_CORS, // 👈 Allowed domains from app.config.json
    credentials: true, // 👈 Allows sending of cookies or personalized headers
  })
);

app.use(express.json()); // 📦 Allows receiving JSON in requests

connectDB();

const prefix = "/api/v1/favorite-products-list";

// 🛣️ Main Routes
app.use(`${prefix}/auth`, authRoutes);
app.use(`${prefix}/product`, productRouter);
app.use(`${prefix}/favorite`, favoriteProductRouter);

// ⚙️ Start the server
app.listen(PORT, () => {
  console.log("=======================================================");
  console.log("🟢 Servidor iniciado correctamente");
  console.log(`🌐 URL base: http://localhost:${PORT}${prefix}`);
  console.log("⚙️ Configuración:");
  console.log(`     - CORS permitido: ${ALLOWED_CORS}`);
});
