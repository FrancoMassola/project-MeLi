//require modules
const express = require("express");
const config = require("../src/config");
const productsRoutes = require("../src/routes/products.routes");

//run express module
const app = express();

//settings
app.set("port", config.port);

//middlewares, for understand the client request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set routes to the server
app.use("/api", productsRoutes);

module.exports = app;
