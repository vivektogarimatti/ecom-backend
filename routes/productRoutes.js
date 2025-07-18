const express = require("express");
const {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const productRoutes = express.Router();

productRoutes.get("/products", getProducts);

productRoutes.post("/products", createProduct);

productRoutes.get("/products/:productId", getProductById);

productRoutes.put("/products/:productId", updateProduct);

productRoutes.delete("/products/:productId", deleteProduct);

module.exports = productRoutes;
