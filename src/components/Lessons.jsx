import React from 'react';
import Palace from '../assets/photopeople.jpg'

const Lessons = () => {
  return (
    <div className='w-full bg-gray-100 py16 px-4'>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Palace} alt='/'></img>
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold uppercase'>уроки привады</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>уроки</h1>
            <p>Do magna ea minim fugiat. Culpa id exercitation irure
               exercitation veniam exercitation dolor labore incididunt
               officia magna. Amet deserunt incididunt irure laboris cupidatat quis.
            </p>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0'>тест</button>
        </div>
      </div>
    </div>
  )
}

export default Lessons
