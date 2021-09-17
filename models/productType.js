const mongoose = require("mongoose");

const productTypeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const ProductType = mongoose.model("ProductType", productTypeSchema);

module.exports = ProductType;
