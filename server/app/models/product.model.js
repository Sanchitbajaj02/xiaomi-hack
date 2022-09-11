const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productCategory: {
      type: String,
      required: true,
      enum: [
        "television",
        "phone",
        "laptop",
        "pc-accessories",
        "bands-fitness",
      ],
    },
    productColor: [
      {
        type: String,
      },
    ],
    productType: [
      {
        variant: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
      },
    ],
    productAvailability: {
      type: Boolean,
      default: true,
    },
    productQuantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
