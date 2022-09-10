const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
    },
    productCategory: {
      type: String,
      enum: [
        "Television",
        "Phone",
        "Laptop",
        "PC Accessories",
        "Bands & Fitness",
      ],
    },
    productColor: {
      type: String,
    },
    productVariant: {
      type: String,
    },
    productAvailability: {
      type: Boolean,
      default: true,
    },
    productQuantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
