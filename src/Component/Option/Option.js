import React from 'react';

const Option = ({option,handleClick}) => {
    console.log(option)
    return (
        <div>
            <div className='border-solid border-2 p-3 rounded'>
         <p onClick={() =>handleClick(option)}><input type="radio"/>{option}</p>
            </div>
        </div>
    );
};

export default Option;