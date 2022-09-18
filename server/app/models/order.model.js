const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    paymentType: {
      type: String,
      enum: ["Credit Card", "Debit Card", "Net Banking", "Cash", "UPI"],
    },
    paymentAmount: {
      type: Number,
    },
    paymentDate: {
      type: Date,
    },
    cart: [
      {
        color: String,
        price: Number,
        productId: mongoose.Schema.Types.ObjectId,
        variantId: mongoose.Schema.Types.ObjectId,
      },
    ],
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
    operatorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Operator",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
