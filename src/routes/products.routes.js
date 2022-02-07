//require Router module of express
const Router = require("express");
const { searchProducts } = require("../controllers/products.controller");

//generate a instance of the Router
const router = Router();

//search products
router.get("/items", searchProducts);

module.exports = router;
