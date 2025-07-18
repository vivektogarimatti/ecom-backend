const express = require("express");
const {
  register,
  loginUser,
  logout,
} = require("../controllers/authController");

const authRoutes = express.Router();

authRoutes.post("/register", register);

authRoutes.post("/login", loginUser);

authRoutes.post("/logout", logout);

module.exports = authRoutes;
