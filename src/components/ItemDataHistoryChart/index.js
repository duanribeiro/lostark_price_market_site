import React from 'react';
import { ComposedChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Bar } from 'recharts';

import "./styles.scss"


export default function ItemDataHistoryChart(props) {
  return (
    <ResponsiveContainer height={600}>
      <ComposedChart 
        data={props.allItemData}
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 150
        }}
      >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="last_update" angle={-45} textAnchor="end"  />
            <YAxis/>
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px', color: "white" }}/>
            <Line activeDot={{ r: 8 }} type="monotone" dataKey="avg_day" stroke="red"  />
            <Line activeDot={{ r: 8 }} type="monotone" dataKey="lowest_price" stroke="blue" />
            <Bar dataKey="cheapest_remaning" fill="#B3B3B3" opacity="0.50"   />
      </ComposedChart >
    </ResponsiveContainer>
  );
}
