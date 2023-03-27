import React, { PureComponent } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
interface TaskChartProps {
  data: ResultWithHours[];
}
const TheChart = ({ data }: TaskChartProps) => {
  
console.log(data)

  return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="hours" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  );
};

export default TheChart;
