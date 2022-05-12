const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pwd: { type: String, required: true },
  roles: {
    Admin: { type: Number, default: 8675 },
    Editor: { type: Number, default: 3099 },
    User: { type: Number, default: 2022 },
  },
  refreshToken: { type: String },
});

module.exports = mongoose.model("User", userSchema);
