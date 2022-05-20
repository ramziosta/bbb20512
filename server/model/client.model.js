const mongoose = require("mongoose");

const User = new mongoose.Schema({
  user: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pwd: { type: String, required: true },
  matchPwd: { type: String },
  accountType: { type: String, required: true },
  accountNumber: { type: Number, required: true },
  created: { type: Date, required: true },
  balance: { type: Number, required: true },
  transactions: [
    {
      amount: { type: Number, required: true },
      balance: { type: Number, required: true },
      transactionDate: { type: Date, required: true },
      transactionType: { type: String, required: true },
    },
  ],
  roles: {
    Admin: { type: Number }, //default: 8675
    Editor: { type: Number }, //default:3099
    User: { type: Number, default: 2022 },
  },
  refreshToken: { type: String },
  cookie: { type: String },
});

const model = mongoose.model("User", User);

module.exports = model;
