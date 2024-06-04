const express = require("express");
const router = express.Router();
const hotelDataController = require("../controllers/hotelDataController");

router
  .route("/")
  .get(hotelDataController.getAllData)
  .post(hotelDataController.submitData);

router.route("/:date").get(hotelDataController.getDataByDate);
module.exports = router;
