import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
interface TaskChartProps {
  tasks: {
    day: string;
    completed: number;
  }[];
}
const TheChart = ({  }: TaskChartProps) => {
 


  const tasks = [
    { day: "a", hours: "1200" },
    { day: "b", hours: "1250" },
    { day: "c", hours: "1260" },
    { day: "d", hours: "1200" },
    { day: "f", hours: "1200" },
    { day: "g", hours: "1200" },
    { day: "d", hours: "1200" },
  ];





 console.log(tasks);
 
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart  data={tasks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis  />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="completed" stroke="#8884d8" />
        <Line type="monotone" dataKey="lol" stroke="#6434d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TheChart;
