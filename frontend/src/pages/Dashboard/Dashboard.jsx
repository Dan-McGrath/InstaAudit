import { useEffect } from 'react';
import Cards from '../../components/Cards';
import { useHotelData } from '../../store/useHotelData';

const Dashboard = () => {
  const { fetchHotelData, hotelData } = useHotelData();

  useEffect(() => {
    fetchHotelData();
  });

  return (
    <main>
      <div>
        <Cards data={hotelData} />
      </div>
    </main>
  );
};

export default Dashboard;
