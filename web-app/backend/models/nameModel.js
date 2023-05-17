const mongoose = require("mongoose");

const nameSchema = mongoose.Schema({
  id: { type: Number },
  lname: { type: String },
  avatar: { type: String },
});

module.exports = mongoose.model("name", nameSchema);
