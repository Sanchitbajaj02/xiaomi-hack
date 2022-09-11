const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
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
    paymentStatus: {
      type: String,
      enum: ["Pending", "Success", "Failed"],
      default: "Pending",
    },
    customerID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", PaymentSchema);
