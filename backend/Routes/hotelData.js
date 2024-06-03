const express = require("express");
const router = express.Router();
const hotelDataController = require("../controllers/hotelDataController");

router
  .route("/")
  .get(hotelDataController.getAllData)
  .post(hotelDataController.submitData);

module.exports = router;
