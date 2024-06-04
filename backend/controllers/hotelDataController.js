const sampleData = require("../db/data");
const hotelDetails = require("../db/hotelDetails");
const {
  getAdr,
  getRevPar,
  getOccupied,
  getOverviewData,
} = require("../utils/helpers");

// @desc Get all hotel data
// @route GET /hotelData
// @access Private
const getAllData = async (req, res) => {
  // TODO: change when real DB is added
  const data = sampleData;

  if (!data?.length) {
    return res.status(400).json({ message: "No hotel data found" });
  }

  res.json(users);
};

// @desc Get specific user
// @route POST hotel data
// @access Private
const submitData = async (req, res) => {
  const {
    groupData,
    compRoomInfo,
    outOfOrderRooms,
    revenueData,
    roomData,
    auditDate,
    createdBy,
    createdAt,
    updatedAt,
  } = req.body;
  // Check if revenueData is correct
  if (
    !Number(revenueData.total) ||
    !Number(revenueData.group) ||
    !Number(revenueData.contract)
  ) {
    return res
      .status(400)
      .json({ message: "All revenue data required. Fields must be numbers" });
  }

  // Check if roomData is correct
  if (
    !Number(roomData.total) ||
    !Number(roomData.contract) ||
    !Number(roomData.outOfOrderRooms) ||
    !Number(roomData.stayOver) ||
    !Number(roomData.arrivals) ||
    !Number(roomData.departures) ||
    !Number(roomData.groupRooms) ||
    !Number(roomData.compRooms)
  ) {
    return res.status(400).json({
      message:
        "All room data required even if value is 0. Fields must be numbers",
    });
  }

  // if room data has group rooms but the group data is not inputted. Reject the request
  if (!(groupData.length === roomData.groupRooms)) {
    return res.status(400).json({
      message: "Must add group data too submit",
    });
  }

  // if room data has comp rooms but the compData is not inputted. Reject the request
  if (!(compRoomInfo.length === roomData.compRooms)) {
    return res.status(400).json({
      message: "Must add complementary room data too submit",
    });
  }

  // Check comp room info if any entered
  if (compRoomInfo) {
    compRoomInfo.forEach((ele) => {
      if (!ele.authorizedBy || !ele.guestName || !ele.reason) {
        return res.status(400).json({
          message: "All fields required for comp room info",
        });
      }
    });
  }

  // Check out of order info if any entered
  if (outOfOrderRooms) {
    outOfOrderRooms.forEach((ele) => {
      if (!ele.code || !ele.roomNumber || !ele.details) {
        return res.status(400).json({
          message: "All fields required for out of order room info",
        });
      }
    });
  }

  // Check group info if any entered
  if (groupData) {
    groupData.forEach((ele) => {
      if (!ele.name || !Number(ele.roomCount) || !Number(ele.revenue)) {
        return res.status(400).json({
          message: "All fields required for group data",
        });
      }
    });
  }

  // Check if dates are date objects
  if (
    !(auditDate instanceof Date) ||
    !(createdBy instanceof Date) ||
    !(createdAt instanceof Date) ||
    !(updatedAt instanceof Date)
  ) {
    return res.status(400).json({
      message: "Dates are not a date object",
    });
  }

  // TODO: Save to DB when added
  // TODO: Use data receieved to make new properties (i.e. Occupancy, revPar, adr)
  let auditData = {
    groupData,
    compRoomInfo,
    outOfOrderRooms,
    revenueData,
    auditDate,
    createdBy,
    createdAt,
    updatedAt,
  };

  auditData = getOverviewData(auditData, hotelDetails.totalRooms);

  sampleData.push(auditData);

  res
    .status(201)
    .json({ message: `Info for ${auditDate} created`, data: auditData });
};

const getDataByDate = async (req, res) => {
  const { date } = req.query.params;
  // TODO: search data by date with DB when available
  let data;
  sampleData.forEach((obj) => {
    if (obj.createdAt === date) {
      data = obj;
    } else {
      return res.status(400).json({ message: "Could not find date" });
    }
  });
  return res.json(data);
};

module.exports = {
  getAllData,
  submitData,
  getDataByDate,
};
