import React from 'react';
import image from '../../Image/image.jpg'

const BodyHeader = () => {
    return (
        <div className='grid md:grid-cols-2 m-5'>
        <img src={image} alt="" />
        <div>
            <h1 className='font-bold font-serif text-center text-xl'>International Quiz Academy</h1>
            <p className='text-center p-3'>ASIS&T brings opportunities of online quiz contest to win Exciting Prizes. The Asia/Pacific Region of the 24-Hour Global Conference is instituting an Online Quiz Contest with the objective of promoting awareness about the ASIS&T.</p>
        </div>
       </div>
    );
};

export default BodyHeader;