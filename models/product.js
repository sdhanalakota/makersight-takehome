const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  productType: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ProductType",
    required: true,
  }
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
