const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerEmail: {
      type: String,
      required: true,
      unique: true,
    },
    customerNumber: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
    },
    customerCity: {
      type: String,
    },
    customerState: {
      type: String,
    },
    customerZip: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Customer", CustomerSchema);
