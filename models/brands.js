const mongoose = require("mongoose");

const brandSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true,
  }
});

const Brand = mongoose.model("Brand", brandsSchema);

module.exports = Brand;
