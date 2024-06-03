const sampleData = require("../db/hotelDetails");

// @desc Get hotel details
// @route GET /hotelDetails
// @access Private
const getDetails = async (req, res) => {
  // TODO: change when real DB is added

  const details = sampleData;

  if (!details) {
    return res.status(400).json({ message: "No details found" });
  }

  res.json(details);
};

module.exports = {
  getDetails,
};
