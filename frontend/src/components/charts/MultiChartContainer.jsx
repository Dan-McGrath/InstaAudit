import { Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';
import { useHotelData } from '../../store/useHotelData';

const MultiChartContainer = () => {
  const { hotelOverviewData } = useHotelData();
  console.log(hotelOverviewData);
  const data = [
    { name: 'Jun 2023', revpar: 100, ADR: 120, OCC: 50 },
    { name: 'Jul 2023', revpar: 200, ADR: 150, OCC: 61.7 },
    { name: 'Aug 2023', revpar: 250, ADR: 170, OCC: 78.79 },
    { name: 'Sep 2023', revpar: 220, ADR: 130, OCC: 62.5 },
    { name: 'Oct 2023', revpar: 180, ADR: 110, OCC: 51.22 },
    { name: 'Nov 2023', revpar: 240, ADR: 140, OCC: 72.73 },
  ];
  return (
    <div className="w-full mx-auto my-2">
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 100]} unit="%" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="revpar" fill="#004D7F" name="RevPar" />
          <Bar yAxisId="left" dataKey="ADR" fill="#00B7B6" name="ADR" />
          <Line yAxisId="right" type="monotone" dataKey="OCC" stroke="#ff7300" name="OCC" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiChartContainer;
