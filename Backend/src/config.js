//require dotenv for environment variable handling
const env = require("dotenv");

env.config();

module.exports = {
  port: process.env.PORT || 4000,
};
