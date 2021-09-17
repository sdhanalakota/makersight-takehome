const Product = require("../models/product.js");

export const getProducts = async (req, res) => {
  try {
    const productsList = await Product.find();
    res.status(200).json(productsList);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
