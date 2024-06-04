const getAdr = (roomsOccupied, roomRevenue) => {
  if (typeof roomRevenue === "string") {
    const convertedString = Number(roomRevenue.replace(/[^0-9.-]+/g, ""));
    return Math.round((convertedString / roomsOccupied) * 100) / 100;
  } else {
    return Math.round((roomRevenue / roomsOccupied) * 100) / 100;
  }
};

const getRevPar = (roomsAvailable, roomRevenue) => {
  if (typeof roomRevenue === "string") {
    const convertedString = Number(roomRevenue.replace(/[^0-9.-]+/g, ""));
    return Math.round((convertedString / roomsAvailable) * 100) / 100;
  } else {
    return Math.round((roomRevenue / roomsAvailable) * 100) / 100;
  }
};

const getOccupied = (roomsAvailable, roomsSold) => {
  return Math.round(roomsAvailable / roomsSold) / 10;
};

const removetime = (date) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

const getOverviewData = (data, totalRooms) => {
  const { revenueData, roomData } = data;

  // get current year and current month
  const currentYear = new Date(new Date().getFullYear(), 0, 1);

  // new object properties
  let groupRevPar;
  let totalRevPar;
  let contractRevPar;
  let totalAdr;
  let groupAdr;
  let contractAdr;
  let transientAdr;
  let transientRevPar;
  let occupancy;

  const occupiedRooms = roomData.total;
  const contractRooms = roomData.contract;
  const groupRooms = roomData.groupRooms;
  const outOfOrderRooms = roomData.outOfOrder;
  const compRooms = roomData.compRooms;

  const availableRoomsWithComps = totalRooms - outOfOrderRooms;
  const transientRevenue =
    revenueData.total - revenueData.group - revenueData.contract;
  const transientRooms = occupiedRooms - contractRooms - groupRooms;

  totalRevPar = getRevPar(availableRoomsWithComps, revenueData.total);
  groupRevPar = getRevPar(availableRoomsWithComps, revenueData.group);
  contractRevPar = getRevPar(availableRoomsWithComps, revenueData.contract);
  transientRevPar = getRevPar(availableRoomsWithComps, transientRevenue);
  totalAdr = getAdr(occupiedRooms, revenueData.total);
  groupAdr = getAdr(groupRooms, revenueData.group);
  contractAdr = getAdr(contractRooms, revenueData.contract);
  transientAdr = getAdr(transientRooms, transientRevenue);
  occupancy = getOccupied(availableRoomsWithComps, occupiedRooms);

  data.adr = {
    totalAdr,
    groupAdr,
    contractAdr,
    transientAdr,
  };

  data.revPar = {
    totalRevPar,
    groupRevPar,
    contractRevPar,
    transientRevPar,
  };

  data.occupancy = occupancy;

  return data;
};

module.exports = {
  getAdr,
  getRevPar,
  getOccupied,
  getOverviewData,
  removetime,
};
