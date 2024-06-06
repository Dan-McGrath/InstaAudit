import Card from '../../components/Card';
import MultiChartContainer from '../../components/charts/MultiChartContainer';
import { useHotelData } from '../../store/useHotelData';
import OverviewTiles from './OverviewTiles';
import { format } from 'date-fns';
import { formatToDollars } from '../../utils/helper';

const Dashboard = () => {
  const { auditDate, setAuditDate, hotelOverviewData } = useHotelData();
  const occupancy = hotelOverviewData.occupancy;
  console.log(occupancy);
  return (
    <main className="mt-5">
      <div className="pr-3 mb-3 text-right">
        <p>
          Audit Date: <span className="text-primaryColor">{format(auditDate, 'MMMM dd, yyyy')}</span>
        </p>
      </div>
      {Object.keys(hotelOverviewData).length !== 0 && (
        <div className="flex flex-col gap-2 px-5 py-3 mx-2 border rounded-md shadow-lg justify-evenly">
          <Card
            data={
              occupancy.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }) + '%'
            }
            text="Occupancy"
          />
          <Card data={formatToDollars(hotelOverviewData.revenueData.total)} text="Room Revenue" />
        </div>
      )}
      <div>
        <OverviewTiles />
      </div>
      <MultiChartContainer />
    </main>
  );
};

export default Dashboard;
