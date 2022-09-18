const ProductSchema = require("../models/product.model");
const OperatorSchema = require("../models/operator.model");
const OrderSchema = require("../models/order.model");
const CustomerSchema = require("../models/customer.model");

const getOrderList = async (req, res) => {
  const { operatorID } = req.tokenPayload;

  if (operatorID) {
    OrderSchema.find({ operatorID })
      .populate("customerID")
      .exec((err, orders) => {
        if (err) {
          res.status(400).json({
            message: "Orders not found",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "Orders list",
            result: orders,
          });
        }
      });
  } else {
    res.status(400).json({
      message: "Token not verified",
    });
  }
};

const createOrder = async (req, res) => {
  const { cart, customerInfo, paymentInfo } = req.body;

  console.log(customerInfo);
  console.log(cart);
  console.log(paymentInfo);

  const { operatorID } = req.tokenPayload;

  const customerData = await CustomerSchema(customerInfo);

  customerData
    .save()
    .then((custData) => {
      const customerID = custData._id;

      let payDate = new Date();
      payDate.toLocaleDateString("en-GB");

      const orderData = OrderSchema({
        paymentType: paymentInfo.paymentType,
        paymentAmount: paymentInfo.paymentAmount,
        paymentDate: payDate,
        cart: cart,
        customerID: customerID,
        operatorID: operatorID,
      });

      orderData
        .save()
        .then((order) => {
          res.status(200).json({
            message: "Order created successfully",
            result: order,
          });
        })
        .catch((err) => {
          res.status(400).json({
            message: "Order not created",
            error: err,
          });
        });
    })
    .catch((err) => {
      res.status(4001).json({
        message: "Customer not found",
        error: err,
      });
    });
};

module.exports = {
  createOrder,
  getOrderList,
};
