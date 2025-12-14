const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    names: { type: String, trim: true, required: true },
    lastNames: { type: String, trim: true, required: true },
    nickName: { type: String, trim: true, required: true },
    documentNumber: { type: Number, unique: true, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
