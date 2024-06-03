const express = require("express");
const router = express.Router();
const hotelDetailsController = require("../controllers/hotelDetailsController");

router.route("/").get(hotelDetailsController.getDetails);

module.exports = router;
