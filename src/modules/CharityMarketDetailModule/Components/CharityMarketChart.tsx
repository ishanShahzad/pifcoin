import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '04/12',
    sales: 0,
    amt: 2210,
  },
  {
    name: '05/12',
    sales: 0.05,
    amt: 2210,
  },
  {
    name: '06/12',
    sales: 0.1,
    amt: 2210,
  },
  {
    name: '07/12',
    sales: 0.15,
    amt: 2210,
  },
  {
    name: '08/12',
    sales: 0.2,
    amt: 2210,
  },
  {
    name: '09/12',
    sales: 0.12,
    amt: 2210,
  },
  {
    name: '10/12',
    sales: 0.2,
    amt: 2210,
  },
];

export default class CharityMarketChart extends PureComponent {
    // static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%" >
          <LineChart
            width={500}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3" vertical= {false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#be71bb" activeDot={{ r: 8 }} />
            {/* <Line type="monotone" dataKey="sales" stroke="#be71bbd" /> */}
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }