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
        <li className='p-4' id='home'>Home</li>
        <li className='p-4' id='lessons'>уроки</li>
        <li className='p-4' id='prices'>Цены</li>
        <li className='p-4' id='contact'>контакт</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
    </div>
  )
}

export default NavBar
