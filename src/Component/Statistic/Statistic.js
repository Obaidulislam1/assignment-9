import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { XAxis, YAxis, BarChart, Bar } from 'recharts';

const Statistic = () => {
const data = useLoaderData();
const datas = data.data
    return (
        <div className='flex justify-center items-center mt-20 w-100%'>
         <div>
         <BarChart width={400} height={300} data={datas}>
            <XAxis dataKey="name" />
            <YAxis dataKey="total" />
            <Bar dataKey="total" barSize={30} fill="#8884d8" />
          </BarChart> 
         </div>
        </div>
    );
};

export default Statistic;