import { useState } from 'react';
import { useHotelData } from '../../store/useHotelData';

const AuditForm = () => {
  const { sumbitData, handleChange } = useHotelData();

  // Revenue data
  const [roomRevenue, setRoomRevenue] = useState(0);
  const [groupRevenue, setGroupRevenue] = useState(0);
  const [contractRevenue, setcontractRevenue] = useState(0);

  // Room Data
  const [totalRooms, setTotalRooms] = useState(0);
  const [arrivals, setArrivals] = useState(0);
  const [contractRooms, setContractRooms] = useState(0);
  const [departures, setDepartures] = useState(0);
  const [outOfOrderRoomTotal, setOutOfOrderRoomTotal] = useState(0);
  const [stayOvers, setStayOvers] = useState(0);

  // Arrays of information for subsections
  const [groupData, setGroupData] = useState([]);
  const [compRoomInfo, setCompRoomInfo] = useState([]);
  const [outOfOrderRooms, setOutOfOrderRooms] = useState([]);

  return (
    <form onSubmit={(e) => sumbitData(e)}>
      <input type="submit" disabled />
    </form>
  );
};

export default AuditForm;
