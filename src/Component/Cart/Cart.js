import React from 'react';
import { ArrowRightIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Cart = ({topic,handleClick}) => {
    const {name,logo,id} = topic;
    return (
        <div className='p-1 border-slate-200 border-2 rounded'>
            <img className='bg-emerald-100 rounded w-full' src={logo} alt="" />
           <div className='flex justify-between m-1'>
           <h1 className='text-2xl '>{name}</h1>
           <Link to={`../Cart/${id}`}>
           <button className='flex text-teal-500 items-center p-0 text-xs rounded font-bold'>Start<ArrowRightIcon className='h-3 w-3'/></button>
           </Link>
           </div>
        </div>
    );
};

export default Cart;