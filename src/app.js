//require modules
const express = require("express");
const config = require("../src/config");

//run express module
const app = express();

//settings
app.set("port", config.port);

//middlewares, for understand the client request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
