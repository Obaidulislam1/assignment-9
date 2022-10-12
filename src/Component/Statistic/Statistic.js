import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chart from '../Chart/Chart';

const Statistic = () => {
const data = useLoaderData();
    return (
        <div>
            {
                data.data.map(info =><Chart key={info.id} info={info}></Chart>)
            }
        </div>
    );
};

export default Statistic;