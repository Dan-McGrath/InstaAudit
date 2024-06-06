import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import { useHotelData } from '../../store/useHotelData';

const MultiChartContainer = () => {
  const { hotelOverviewData } = useHotelData();
  const data = [
    { name: 'Jun 2023', RevPAR: 100, ADR: 120, OCC: 50 },
    { name: 'Jul 2023', RevPAR: 200, ADR: 150, OCC: 61.7 },
    { name: 'Aug 2023', RevPAR: 250, ADR: 170, OCC: 78.79 },
    { name: 'Sep 2023', RevPAR: 220, ADR: 130, OCC: 62.5 },
    { name: 'Oct 2023', RevPAR: 180, ADR: 110, OCC: 51.22 },
    { name: 'Nov 2023', RevPAR: 240, ADR: 140, OCC: 72.73 },
  ];
  return (
    <div className="w-full mx-auto">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 100]} unit="%" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="RevPAR" fill="#004D7F" />
          <Bar yAxisId="left" dataKey="ADR" fill="#00B7B6" />
          <Line yAxisId="right" type="monotone" dataKey="OCC" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiChartContainer;
