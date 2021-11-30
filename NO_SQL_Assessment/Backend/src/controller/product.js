const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  if (req.body.name == "") {
    const products = await Product.find({});
    res.status(200).json({ products });
  } else {
    const products = await Product.find({ name: req.user.name });
    res.status(200).json({ products });
  }
};
