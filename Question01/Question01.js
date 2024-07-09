/*Develop an Express.js route to execute an intricate MongoDB query. 
Retrieve all products with prices exceeding a specified value ('minPrice'). 
Provide the results sorted by price in descending order. 
(Provide the github link for the code.)*/
const express = require("express");

const PORT = 500;

const server = express();
server.use(express.json());
const router = express.Router();
const Product = require("../models/Product");

router.get("/products", async (req, res) => {
  try {
    const minPrice = req.query.minPrice;

    const products = await Product.find({ price: { $gt: minPrice } })
      .sort({ price: -1 })
      .exec();

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
