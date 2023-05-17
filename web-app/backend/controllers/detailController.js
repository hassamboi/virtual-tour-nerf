const asyncHandler = require("express-async-handler");

const Location = require("../models/detailModel");

const getLocation = asyncHandler(async (req, res) => {
  const locationId = req.params.id; // Assuming the blog ID is provided as a route parameter
  console.log(locationId);
  const location = await Location.findOne({ id: locationId });

  if (!location) {
    return res.status(404).json({ message: "Location not found" });
  }
  res.json(location);
});

module.exports = { getLocation };
