const OperatorSchema = require("../models/operator.model");
const { hashPassword, checkUser } = require("../helper/passwords");

const showAllOperators = async (req, res) => {
  await OperatorSchema.find()
    .then((operators) => {
      res.status(200).json({
        message: "Operators list",
        result: operators,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "Operators not found",
      });
    });
};

const operatorSignup = async (req, res) => {
  const { operatorName, operatorEmail, miID, password, storeType, pos } =
    req.body;

  hashPassword(password)
    .then((hashedPassword) => {
      OperatorSchema.create({
        operatorName,
        operatorEmail,
        miID,
        password: hashedPassword,
        storeType,
        pos,
      })
        .then((operator) => {
          res.status(200).json({
            message: "Operator registered successfully",
            result: operator,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "Operator already exists",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).json({
        message: "password does not correct",
      });
    });
};

const operatorLogin = async (req, res) => {
  const { miID, password, storeType, pos } = req.body;

  await OperatorSchema.findOne({
    miID,
    storeType,
    pos,
  })
    .then((operator) => {
      const hashedPassword = operator.password;

      checkUser(password, hashedPassword)
        .then((match) => {
          res.status(200).json({
            message: "Operator login successfully",
            result: operator,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "password does not match correctly",
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
  showAllOperators,
  operatorSignup,
  operatorLogin,
};
