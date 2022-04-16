const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//router.post("/login", function);
//router.get("/whoami", (req, res) => {
//  res.send(result);
//});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
