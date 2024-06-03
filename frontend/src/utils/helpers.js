const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const getAdr = (roomsOccupied, roomRevenue) => {
  const convertedString = Number(roomRevenue.replace(/[^0-9.-]+/g, ''));
  return USDollar.format(Math.round((convertedString / roomsOccupied) * 100) / 100);
};

export const getRevPar = (roomsAvailable, roomRevenue) => {
  const convertedString = Number(roomRevenue.replace(/[^0-9.-]+/g, ''));
  return USDollar.format(Math.round((convertedString / roomsAvailable) * 100) / 100);
};

export const getOccupied = (roomsAvailable, roomsSold) => {
  return Math.round(roomsAvailable / roomsSold) / 10;
};
