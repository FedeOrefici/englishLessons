import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>уроки английского</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>уроки</li>
        <li className='p-4'>Цены</li>
        <li className='p-4'>контакт</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* <div className={!nav ? 'hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-[#000300]' : 'fixed left-[-100]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>уроки английского</h1>
        <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>уроки</li>
        <li className='p-4 border-b border-gray-600'>Цены</li>
        <li className='p-4'>контакт</li>
        </ul>
      </div> */}
    </div>
  )
}

export default NavBar
