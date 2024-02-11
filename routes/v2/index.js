const express = require("express");
const router = express.Router();
router.get("/info", (req, res) => {
  res.status(404).json({
    message: "hello this is coming from v2 api",
    status: "404",
  });
});
module.exports = router;
