const express = require("express");
//const {  } = require('../controller/category');
const { getProducts } = require("../controller/product");
const router = express.Router();

router.post("/product/getProducts", getProducts);

module.exports = router;
