// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true, unique: true },
//   totalPoints: { type: Number, default: 0 },
// });

// const User = mongoose.model("User", userSchema);
// export default User;

// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  totalPoints: { type: Number, default: 0 },
  avatarUrl: { type: String },  // NEW FIELD
});

module.exports = mongoose.model("User", userSchema);
