const express = require("express");
const router = express.Router();

const {
  addProduct,
  getAllProducts,
  showProductsByCategory,
} = require("../controllers/product.controllers");

const { verifyToken } = require("../helper/token");

router.get("/", verifyToken, getAllProducts);
router.post("/addProduct", verifyToken, addProduct);
router.get(
  "/showProductsByCategory/:productCategory",
  verifyToken,
  showProductsByCategory
);

module.exports = router;
