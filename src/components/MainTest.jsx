import React from 'react';
import { useState } from 'react';
import questions from './testQuestions';

const MainTest = () => {

    const [actualQuestion, setActualQuestion] = useState(0);
    const [points, setPoints] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const handleAnswerSubmit = (isCorrect) => {
        //add points
        if(isCorrect) setPoints(points + 1)
        
        setTimeout(() => {
            if(actualQuestion === questions.length -1){
                setIsFinished(true);
            } else {
                setActualQuestion(actualQuestion + 1)
            }
        },[1000]);
    }

    if(isFinished) return (
            <main className='fixed inset-0 mt-32 mx-auto bg-gray-100 w-[800px] h-96 rounded text-center flex justify-center items-center flex-col shadow-xl'>
                <span className='text-3xl'>ты получил {points} из {questions.length}</span>
                <button 
                onClick={() => window.location.href='/'}
                className='bg-[#00df9a] hover:bg-[#00dfad] w-[200px] text-black rounded py-3 mt-6 shadow-xl'>назад</button>
            </main>
    )
    

  return (
    <main className='fixed inset-0 mt-32 mx-auto bg-gray-200 w-[800px] h-96 rounded text-center flex justify-center items-center flex-col shadow-xl'>
        <span>Question: {actualQuestion + 1} of {questions.length}</span> 
            <div className='w-[500px] bg-[#00df9a] rounded py-3 my-6'>{questions[actualQuestion].title}</div>
            <div className='flex justify-center items-center gap-10'>
                {questions[actualQuestion].options.map((answer) => (
                    <button 
                    key={answer.textAnswer}
                    onClick={(e) => handleAnswerSubmit(answer.isCorrect, e)}
                    className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>{answer.textAnswer}</button>
                ))}  
            </div>
    </main>
  )
}

export default MainTest