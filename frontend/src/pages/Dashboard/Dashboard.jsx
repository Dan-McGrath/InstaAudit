import Cards from '../../components/Cards';
import { useHotelData } from '../../store/useHotelData';

const Dashboard = () => {
  const { auditData } = useHotelData();
  return (
    <main>
      <div>
        <Cards data={[]} />
      </div>
    </main>
  );
};

export default Dashboard;
