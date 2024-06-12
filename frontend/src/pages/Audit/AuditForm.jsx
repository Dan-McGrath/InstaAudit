import { useState } from 'react';
import { useHotelData } from '../../store/useHotelData';

const AuditForm = () => {
  const { sumbitData } = useHotelData();

  // Revenue data
  const [roomRevenue, setRoomRevenue] = useState();
  const [groupRevenue, setGroupRevenue] = useState();
  const [contractRevenue, setcontractRevenue] = useState();

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
    <>
      <h2 className="text-2xl font-bold text-center text-primaryColor">Audit Data</h2>
      <nav>
        <ul className="flex items-center gap-1 after:">
          <li>Revenue Totals</li>
          <li>Room Totals</li>
          <li>Room Info</li>
        </ul>
      </nav>
    </>
  );
};

export default AuditForm;

//<form onSubmit={(e) => sumbitData(e)} className="w-3/4 mx-auto ">
//   <div className="flex justify-end w-full mb-2">
//     <input
//       type="submit"
//       disabled
//       className="px-2 py-1 rounded-md bg-secondaryColor disabled:bg-gray-500 disabled:text-white"
//     />
//   </div>
//   <fieldset className="flex flex-col items-center gap-4">
//     <legend className="mb-2 font-semibold text-center text-primaryColor">Revenue</legend>
//     <label className="" htmlFor="roomRevenue">
//       Room Revenue
//     </label>
//     <input
//       type="number"
//       id="roomRevenue"
//       placeholder="Room Revenue"
//       value={roomRevenue}
//       onChange={(e) => setRoomRevenue(Number(e.target.value))}
//     />
//     <label className="" htmlFor="groupRevenue">
//       Group Revenue
//     </label>
//     <input
//       type="number"
//       id="groupRevenue"
//       placeholder="Group Revenue"
//       value={groupRevenue}
//       onChange={(e) => setGroupRevenue(Number(e.target.value))}
//     />
//     <label className="" htmlFor="contractRevenue">
//       Contract Revenue
//     </label>
//     <input
//       type="number"
//       id="contractRevenue"
//       placeholder="Contract Revenue"
//       value={contractRevenue}
//       onChange={(e) => setcontractRevenue(Number(e.target.value))}
//     />
//   </fieldset>
// </form>
