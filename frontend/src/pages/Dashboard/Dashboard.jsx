import Cards from '../../components/Cards';
import { useHotelData } from '../../store/useHotelData';

const Dashboard = () => {
  const { hotelOverviewData } = useHotelData();

  return (
    <main>
      <div>
        <Cards data={hotelOverviewData} />
      </div>
    </main>
  );
};

export default Dashboard;
