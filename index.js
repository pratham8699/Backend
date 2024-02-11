require("dotenv").config();
const express = require("express");
const { ServerConfig, Logger } = require("./config");
// console.log(ServerConfig);
const { home } = require("./routes");
console.log(home);
// console.log(PORT);
const app = express();
const apiroutes = require("./routes");
app.use("/api", apiroutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`the server is up and running on PORT:${ServerConfig.PORT}`);
  Logger.info("Successfully started the server", { msg: "saved" });
});
