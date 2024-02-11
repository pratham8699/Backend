const dotenv = require("dotenv");
dotenv.config();
// console.log("Loaded environment variables:", process.env);
// console.log("PORT from .env:", process.env.PORT);

const PORT = process.env.PORT;
//console.log("PORT after setting default:", PORT);

module.exports = {
  PORT: process.env.PORT,
};
