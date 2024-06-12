import { useState } from 'react';

const RevenueDataForm = () => {
  // Revenue data
  const [roomRevenue, setRoomRevenue] = useState();
  const [groupRevenue, setGroupRevenue] = useState();
  const [contractRevenue, setcontractRevenue] = useState();

  return (
    <>
      <label htmlFor="roomRevenue">Room Revenue</label>
      <input type="number" id="roomRevenue" />
    </>
  );
};

export default RevenueDataForm;
