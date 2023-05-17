const express = require("express");
const router = express.Router();
const { getLocation } = require("../controllers/detailController");

router.get("/:id", getLocation);

module.exports = router;
