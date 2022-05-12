const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
  user: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pwd: { type: String, required: true },
  matchPwd: { type: String, required: true },
  accountType: { type: String, required: true },
  balance: { type: Number },
  transactions: {
    amount: { type: Number, required: true },
    balance: { type: Number, required: true },
    transactionDate: { type: Date, required: true },
    transactionType: { type: String, required: true },
  },
});

module.exports = mongoose.model("Client", clientSchema);
