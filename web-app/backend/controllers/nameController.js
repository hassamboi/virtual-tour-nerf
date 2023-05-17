const asyncHandler = require("express-async-handler");

const Name = require("../models/nameModel");

const getName = asyncHandler(async (req, res) => {
  const names = await Name.find();
  res.json(names);
});

module.exports = { getName };
