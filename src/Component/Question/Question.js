import React from 'react';
import Option from '../Option/Option';

const Question = ({question}) => {
    console.log(question)
    const{options} =question;
    return (
        <div>
            <h1>Question:{question.question}</h1>
            {
                options.map(option =><Option key={option.id} option={option}></Option>)
            }
        </div>
    );
};

export default Question;