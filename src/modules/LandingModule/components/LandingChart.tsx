import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class LandingChart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" aspect={3}>
        <AreaChart
          width={900}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal={false} />
          <XAxis
            dataKey="name"
            tick={{ stroke: "white", strokeWidth: 1 }}
            tickMargin={20}
            height={50}
          />
          <YAxis tick={{ stroke: "white", strokeWidth: 1 }} tickMargin={20} width={80}/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="white" fill="#2F5973" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
