const mongoose = require("mongoose");

const detailSchema = mongoose.Schema({
  id: { type: Number },
  name: { type: String },
  desc: { type: String },
  type: { type: String },
  established: { type: String },
  btime: { type: String },
  flythrough: { type: String },
  panorama: { type: String },
});

module.exports = mongoose.model("detail", detailSchema);
