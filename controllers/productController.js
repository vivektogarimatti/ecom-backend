const Product = require("../models/Product");
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      message: "products fetched successfully",
      products,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "somthing went wrong",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "somthing went wrong",
    });
  }
};
const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "somthing went wrong",
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params.id;
    const productData = req.body;

    const product = await Product.findByIdAndUpdate(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        ...productData,
      },
      {
        new: true,
      }
    );

    res.status(200).json({
      message: "Product updated",
      product: updatedProduct,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "somthing went wrong",
    });
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productid = req.params.id;
    const productId = await Product.findByIdAndDelete(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product Not found",
      });
    }

    res.json({
      message: "Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
