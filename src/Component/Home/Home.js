import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Home = () => {
    const topicData = useLoaderData();
   console.log(topicData)
    return (
        <div>
            {
                topicData.data.map(topic => <Cart
                    key={topic.id}
                    topic={topic}
                ></Cart>)
            }
        </div>
    );
};

export default Home;