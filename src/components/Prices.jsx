import React from 'react';
import photo1 from '../assets/palace.jpg';
import photo2 from '../assets/bigBen.jpg';
import photo3 from '../assets/towerBridge.jpg';

const Prices = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#00df9a]' id='prices'>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300'>
            <img className='w-15 mx-auto rounded' src={photo1} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>один урок в неделю</h2>
            <p className='text-center text-4xl font-bold'>₽1000</p>
            <div className='text-center font-medium'>
                <p className='py-2'>два урока в неделю</p>
                <p className='py-2'>домашнее задание</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Начало</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200'>
            <img className='w-15 mx-auto rounded' src={photo2} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>два урока в неделю</h2>
            <p className='text-center text-4xl font-bold'>₽1800</p>
            <div className='text-center font-medium'>
                <p className='py-2'>получить доступ к домашним заданиям онлайн</p>
                <p className='py-2'>домашнее задание</p>
            </div>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Начало</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300'>
            <img className='w-15 mx-auto rounded' src={photo3} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>группы</h2>
            <p className='text-center text-4xl font-bold'>₽3500</p>
            <div className='text-center font-medium'>
                <p className='py-2'>два урока в неделю</p>
                <p className='py-2'>домашнее задание</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Начало</button>
        </div>
      </div>
      
    </div>
  )
}

export default Prices
