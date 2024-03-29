const mongoose = require("mongoose");

const OperatorSchema = new mongoose.Schema(
  {
    operatorName: {
      type: String,
      required: true,
    },
    operatorEmail: {
      type: String,
      required: true,
      unique: true,
    },
    miID: {
      type: String,
      required: [true, "miID is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    storeType: {
      type: String,
      enum: ["MI STORE", "MI HOME"],
    },
    operatorID: {
      type: String,
      retuired: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Operator", OperatorSchema);
