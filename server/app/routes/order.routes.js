const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrderList,
} = require("../controllers/order.controllers");
const { verifyToken } = require("../helper/token");

router.get("/", verifyToken, getOrderList);
router.post("/createOrder", verifyToken, createOrder);

module.exports = router;
