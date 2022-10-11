import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BodyHeader from '../bodyHeader/BodyHeader';
import Cart from '../Cart/Cart';


const Home = () => {
    const topicData = useLoaderData();
    const handleClick = (id) =>{
        
    }
    return (
        <div>
           <BodyHeader></BodyHeader>
            <div className='grid grid-cols-4 gap-3 ml-5 mr-5'>
                {
                    topicData.data.map(topic => <Cart
                        key={topic.id}
                        topic={topic}
                        handleClick={handleClick}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default Home;