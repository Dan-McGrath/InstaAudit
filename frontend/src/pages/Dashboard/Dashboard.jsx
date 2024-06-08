import Card from '../../components/Card';
import MultiChartContainer from '../../components/charts/MultiChartContainer';
import { useHotelData } from '../../store/useHotelData';
import OverviewTiles from './OverviewTiles';
import { format } from 'date-fns';
import { formatToDollars } from '../../utils/helper';

const Dashboard = () => {
  const { businessDate, hotelOverviewData } = useHotelData();
  const occupancy = hotelOverviewData.occupancy;

  return (
    <main className="mt-5">
      <div className="pr-3 mb-3 text-right">
        <p>
          Business Date:{' '}
          <span className="font-semibold text-primaryColor">{format(businessDate, 'MMMM dd, yyyy')}</span>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {Object.keys(hotelOverviewData).length !== 0 && (
          <div className="flex flex-col gap-2 px-5 py-3 mx-2 border rounded-md shadow-lg justify-evenly">
            <Card
              data={
                occupancy.toLocaleString(undefined, {
                  minimumFractionDigits: 1,
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
      </div>
      <MultiChartContainer />
    </main>
  );
};

export default Dashboard;
