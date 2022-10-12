import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navContaine md:flex'>
            <div>
                <h2 className='font-bold text-xl text-red-400'>National Quiz</h2>
            </div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/statistic'>Statistic</Link>
                <Link to='/blog'>Blog</Link>
            </nav>
        </div>
    );
};

export default Header;