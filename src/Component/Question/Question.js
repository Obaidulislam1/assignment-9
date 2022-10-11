import React from 'react';
import Option from '../Option/Option';

const Question = ({question}) => {
    console.log(question)
    const{options} =question;
    return (
        <div className='border-solid border-2 p-4 rounded w-3/4 mt-10 m-auto'>
            <h1 className='text-center font-bold text-sky-300'>Question: {question.question}</h1>
           <div className='grid grid-cols-2 gap-3'>
           {
                options.map(option =><Option key={option.id} option={option}></Option>)
            }
           </div>
        
        </div>
    );
};

export default Question;