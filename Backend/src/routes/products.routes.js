//require Router module of express
const Router = require("express");
const { searchProducts, searchProductById } = require("../controllers/products.controller");

//generate a instance of the Router
const router = Router();

//search products
router.get("/items", searchProducts);

//search a product details by id 
router.get("/items/:id", searchProductById);

module.exports = router;
