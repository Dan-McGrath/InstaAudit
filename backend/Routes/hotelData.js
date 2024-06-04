const express = require("express");
const router = express.Router();
const hotelDataController = require("../controllers/hotelDataController");

router
  .route("/")
  .get(hotelDataController.getDataByDate)
  .post(hotelDataController.submitData);

router.route("/all").get(hotelDataController.getAllData);
module.exports = router;
