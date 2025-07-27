import {
  LineChart as RLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const CustomLineChart = ({ data = [] }) => {
  return (
    <ResponsiveContainer>
      <RLineChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="acquisition"
          stroke="#16a34a"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="cost"
          stroke="#3b82f6"
          strokeWidth={2}
          dot={false}
        />
      </RLineChart>
    </ResponsiveContainer>
  );
};
