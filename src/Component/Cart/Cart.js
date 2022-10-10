import React from 'react';

const Cart = ({topic}) => {
    const {name,logo,} = topic;
    return (
        <div>
            <img src={logo} alt="" />
            <h1>{name}</h1>
        </div>
    );
};

export default Cart;