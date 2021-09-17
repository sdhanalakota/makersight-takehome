const Brand = require("../models/Brand.js");

export const getBrands = async (req, res) => {
  try {
    const brandsList = await Brand.find();
    res.status(200).json(brandsList);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
