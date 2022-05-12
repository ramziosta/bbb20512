const express = require("express");
const router = express.Router();
const User = require("../files/user.model");
const Transaction = require("../models/transaction.model");
const path = require("path");


// gets all the data on localhost:4000
router.get('^/$|/index(.html)?', function (req, res) {
  User.find({})
    .then((data) => {
      console.log("data", data);
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});



router.post("/register", async (req, res) => {
  console.log(req.body);
  try {
    //const newPassword = await bcrypt.hash(req.body.pwd, 10);
    await User.create({
      user: req.body.user,
      email: req.body.email,
      pwd: req.body.pwd,
      matchPwd: req.body.matchPwd,
      accountType: req.body.accountType,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "error needs to be set according to validation" });
  }
});


router.get("/account", (req, res) => {
  res.send("<h1>hello</h1>");
});

module.exports = router;