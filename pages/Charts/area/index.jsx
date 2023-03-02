import { Header } from "@/Components";
import { useSateContext } from "@/contexts/ContextProvider";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: '2000',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2001',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '20002',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '2003',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '2004',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '2005',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '2006',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
export default function AreaCharts() {
    const { currentMode } = useSateContext()
 

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl ">
      <Header category="Area" title="Inflation Rate in percentage" />
      <div style={{backgroundColor: currentMode === 'Dark' ? '#33373E' : '#fff'}}>
        <AreaChart
          width={750}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </div>
    </div>
  );
}
