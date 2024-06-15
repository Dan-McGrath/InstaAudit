import { useState, useEffect } from 'react';

const RevenueDataForm = ({ setAduitData, auditData, error, setError }) => {
  // Revenue data
  const [roomRevenue, setRoomRevenue] = useState(0);
  const [groupRevenue, setGroupRevenue] = useState();
  const [contractRevenue, setcontractRevenue] = useState();

  return (
    <>
      <div className="flex justify-between w-full gap-2 mx-auto">
        <label htmlFor="roomRevenue">Total Room Revenue</label>
        <input
          type="number"
          id="roomRevenue"
          className="w-1/2 rounded-md focus:border-primaryColor text-primaryColor"
          onChange={(e) => setRoomRevenue(e.target.value)}
          value={roomRevenue}
        />
      </div>
      <div className="flex justify-between w-full gap-2 mx-auto">
        <label htmlFor="groupRevenue">Group Revenue</label>
        <input type="number" id="groupRevenue" className="w-1/2 rounded-md" />
      </div>
      <div className="flex justify-between w-full gap-2 mx-auto">
        <label htmlFor="contractRevenue">Contract Revenue</label>
        <input type="number" id="contractRevenue" className="w-1/2 rounded-md" />
      </div>
    </>
  );
};

export default RevenueDataForm;
