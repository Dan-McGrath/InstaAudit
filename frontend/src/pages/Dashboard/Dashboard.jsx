import MultiChartContainer from '../../components/charts/MultiChartContainer';
import OverviewTiles from './OverviewTiles';

const Dashboard = () => {
  return (
    <main>
      <div>
        <OverviewTiles />
      </div>
      <MultiChartContainer />
    </main>
  );
};

export default Dashboard;
