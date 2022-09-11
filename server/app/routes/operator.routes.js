const express = require("express");
const router = express.Router();

const {
  showAllOperators,
  operatorLogin,
  operatorSignup,
} = require("../controllers/operator.controllers");

router.get("/", showAllOperators);
router.post("/register", operatorSignup);
router.post("/login", operatorLogin);

module.exports = router;
