import { useHotelData } from '../store/useHotelData';
import { getAdr, getOccupied, getRevPar } from '../utils/helpers';

const Card = ({ data }) => {
  const { hotelDetails } = useHotelData();
  const totalRooms = hotelDetails.totalRooms;
  const roomsAvailable = totalRooms - data.outOfOrderRooms.length;
  const adr = getAdr(data.roomData[0].total, data.revenueData[0].total);
  const revPar = getRevPar(roomsAvailable, data.revenueData[0].total);
  return (
    <div>
      <p>{adr}</p>
      <p>{revPar}</p>
    </div>
  );
};

export default Card;
