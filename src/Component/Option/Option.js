import React from 'react';

const Option = ({option}) => {
    return (
        <div>
            <div className='border-solid border-2 p-3 rounded'>
         <input type="radio" name='one'/>{option}
            </div>
        </div>
    );
};

export default Option;