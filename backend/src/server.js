// 🚀 Configuration server.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const productsRouter = require("./routes/productsRouter");

// 🏗️ Initialize the Express application
const app = express();

// 🧩 Global Middlewares
app.use(
  cors({
    origin: process.env.ALLOWED_CORS, // 👈 Allowed domains from app.config.json
    credentials: true, // 👈 Allows sending of cookies or personalized headers
  })
);

app.use(express.json()); // 📦 Allows receiving JSON in requests

connectDB();

const prefix = "/api/v1/favorite-products-list";

// 🛣️ Main Routes
app.use(`${prefix}/auth`, authRoutes);
app.use(`${prefix}/products`, productsRouter);

// ⚙️ Start the server
app.listen(process.env.PORT, () => {
  console.log("=======================================================");
  console.log("🟢 Servidor iniciado correctamente");
  console.log(`🌐 URL base: http://localhost:${process.env.PORT}`);
  console.log("⚙️ Configuración:");
  console.log(`     - CORS permitido: ${process.env.ALLOWED_CORS}`);
});
