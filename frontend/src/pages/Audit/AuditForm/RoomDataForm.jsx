import { useState } from 'react';

const RoomDataForm = () => {
  // Room Data
  const [totalRooms, setTotalRooms] = useState(0);
  const [arrivals, setArrivals] = useState(0);
  const [contractRooms, setContractRooms] = useState(0);
  const [departures, setDepartures] = useState(0);
  const [outOfOrderRoomTotal, setOutOfOrderRoomTotal] = useState(0);
  const [stayOvers, setStayOvers] = useState(0);

  return <div>RoomDataForm</div>;
};

export default RoomDataForm;
