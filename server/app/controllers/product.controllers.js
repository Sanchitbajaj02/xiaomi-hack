const ProductSchema = require("../models/product.model");
const OperatorSchema = require("../models/operator.model");

const getAllProducts = async (req, res) => {
  const { pos } = req.tokenPayload;

  OperatorSchema.findOne({ pos })
    .then((operator) => {
      ProductSchema.find()
        .then((products) => {
          res.status(200).json({
            message: "Products list",
            result: products,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "Products not found",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Operator not found",
        error: err,
      });
    });
};

const addProduct = async (req, res) => {
  const {
    productName,
    productPrice,
    productCategory,
    productColor,
    productType,
    productAvailability,
    productQuantity,
  } = req.body;

  const { pos } = req.tokenPayload;

  OperatorSchema.findOne({ pos })
    .then((operator) => {
      const newProduct = ProductSchema({
        productName,
        productPrice,
        productCategory,
        productColor,
        productType,
        productAvailability,
        productQuantity,
      });

      newProduct
        .save()
        .then((product) => {
          res.status(200).json({
            message: "Product added successfully",
            result: product,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "Error saving product",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Operator not found",
        error: err,
      });
    });
};

const showProductsByCategory = async (req, res) => {
  const { productCategory } = req.params;

  const { pos } = req.tokenPayload;

  OperatorSchema.findOne({ pos })
    .then((operator) => {
      ProductSchema.find({ productCategory })
        .then((products) => {
          res.status(200).json({
            message: "Products list",
            result: products,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "Products not found",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Operator not found",
        error: err,
      });
    });
};

module.exports = {
  getAllProducts,
  addProduct,
  showProductsByCategory,
};
