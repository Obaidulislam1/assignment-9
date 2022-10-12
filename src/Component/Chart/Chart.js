import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = ({info}) => {
    const{total,name} = info;
    return (
        <div>
           <LineChart width={500} height={400} data={info}>
           <Line type="monotone" dataKey={total} stroke="#82ca9d" />
           <XAxis />
          <YAxis dataKey={name}/>
           </LineChart>
        </div>
    );
};

export default Chart;