import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions
    console.log();
    return (
        <div>
            <h3 className='text-center font-bold text-xl text-sky-300'>Quiz of {quiz.data.name}</h3>
            {
               questions.map(question => <Question key={question.id} question={question}></Question>) 
            }
        </div>
    );
};

export default Quiz;