import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Header } from "@/Components";
import { useSateContext } from "@/contexts/ContextProvider";

const data = [
  {
    name: "Page A",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 4000,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 3000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 1000,
    pv: 4300,
    amt: 2100,
  },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];




export default function ColorMapping() {
    const { currentMode } = useSateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="chart" title="Color Mapping" />

      <div  style={{ backgroundColor: currentMode === "Dark" ? "#33373E" : "#fff" }}>
        <BarChart width={750} height={500} data={data}>
          <Bar dataKey="uv" fill="#8884d8" >
          {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
}
