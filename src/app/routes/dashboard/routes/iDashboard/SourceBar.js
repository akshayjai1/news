import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const sourceData = [
  {
    name: "News Agency",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  { name: "Freelancer", uv: 3000, pv: 1398, amt: 2210 },
  { name: "ONA Team", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Government", uv: 2780, pv: 3908, amt: 2000 }
];
const SourceBar = () => (
  <ResponsiveContainer width="100%" height={200}>
    <BarChart
      data={sourceData}
      margin={{ top: 10, right: 0, left: -25, bottom: 0 }}
    >
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      {/* <Bar dataKey="pv" stackId="a" fill="#3367d6" /> */}
      <Bar dataKey="uv" stackId="a" fill="#ffc658" />
    </BarChart>
  </ResponsiveContainer>
);

export default SourceBar;
