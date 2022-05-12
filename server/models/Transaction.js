const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  amount: { type: Number, required: true },
  balance: { type: Number, required: true },
  transactionDate: { type: Date, required: true },
  transactionType: { type: String, required: true },
  accountType: { type: String, required: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);
