import React from 'react';
import BigBen from '../assets/bigBen.jpg';
import Palace from '../assets/palace.jpg';
import TowerBridge from '../assets/towerBridge.jpg';

const Prices = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#00df9a]'>
      <div className='max-w-[1200px] mx-auto grid grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={BigBen} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>один урок в неделю</h2>
            <p className='text-center text-4xl font-bold'>₽1000</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>два урока в неделю</p>
                <p className='py-2 border-b mx-8'>домашнее задание</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Начало</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Palace} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>два урока в неделю</h2>
            <p className='text-center text-4xl font-bold'>₽1800</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>два урока в неделю</p>
                <p className='py-2 border-b mx-8'>домашнее задание</p>
            </div>
            <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]'>Начало</button>
        </div>

        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={TowerBridge} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>группы</h2>
            <p className='text-center text-4xl font-bold'>₽3500</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8'>два урока в неделю</p>
                <p className='py-2 border-b mx-8'>домашнее задание</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Начало</button>
        </div>
      </div>
      
    </div>
  )
}

export default Prices
