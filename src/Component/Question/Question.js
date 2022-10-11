import React from 'react';

const Question = ({question}) => {
    console.log(question)
    const{options} =question;
    return (
        <div>
            <h1>Question:{question.question}</h1>

        </div>
    );
};

export default Question;