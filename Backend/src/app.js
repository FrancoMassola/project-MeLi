//require modules
const express = require("express");
const config = require("../src/config");
const productsRoutes = require("../src/routes/products.routes");
const cors = require("cors");

//run express module
const app = express();

//settings
app.set("port", config.port);

//add cors module to allow the conexion between the backend and frontend
app.use(cors());

//middlewares, for understand the client request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//set routes to the server
app.use("/api", productsRoutes);

module.exports = app;
