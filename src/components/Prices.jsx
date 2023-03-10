import React from 'react';
import photo1 from '../assets/palace.jpg';
import photo2 from '../assets/bigBen.jpg';
import photo3 from '../assets/towerBridge.jpg';

const Prices = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#00df9a] max-sm:py-4' id='prices'>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8 max-sm:mx-10'>
        <div className='w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300'>
            <img className='w-15 mx-auto rounded' src={photo1} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>один урок в неделю</h2>
            <p className='text-center text-4xl font-bold'>₽1000</p>
            <div className='text-center font-medium'>
                <p className=''>два урока в неделю</p>
                <p className=''>домашнее задание</p>
            </div>
        </div>

        <div className='w-full shadow-xl flex flex-col p-6 md:my-0 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-200'>
            <img className='w-15 mx-auto rounded' src={photo2} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>два урока в неделю</h2>
            <p className='text-center text-4xl font-bold'>₽1800</p>
            <div className='text-center font-medium'>
                <p className=''>два урока в неделю</p>
                <p className=''>домашнее задание</p>
            </div>
        </div>

        <div className='w-full shadow-xl flex flex-col p-6 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-300'>
            <img className='w-15 mx-auto rounded' src={photo3} alt='/'/>
            <h2 className='text-2xl font-bold text-center py-4'>группы</h2>
            <p className='text-center text-4xl font-bold'>₽3500</p>
            <div className='text-center font-medium'>
                <p className=''>два урока в неделю</p>
                <p className=''>домашнее задание</p>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Prices
