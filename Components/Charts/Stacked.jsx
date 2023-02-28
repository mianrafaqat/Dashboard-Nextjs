import React, { PureComponent } from "react";
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

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2200,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "july",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

import { useSateContext } from "@/contexts/ContextProvider";

export default function Stacked({currentColor}) {
  const { currentMode } = useSateContext();

  return (
    <>
      <BarChart
        width={350}
        height={360}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip  />
        <Legend  />
        <Bar dataKey="pv" stackId="a" fill={currentColor} />
        <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>
    </>
  );
}
