const dotenv = require("dotenv");

dotenv.config();

const env = {
  port: process.env.PORT || 5050,
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:3000",
};

module.exports = env;