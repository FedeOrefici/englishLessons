import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {

  return (
   
    <div className='flex justify-between items-center h-24 w-full mx-auto px-10 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] max-sm:text-center'>уроки английского</h1>

      <ul className='hidden md:flex mr-5'>
      
        <li className='p-4 cursor-pointer' id='lessons'>
          <Link to="lessons" spy={true} smooth={true} offset={600} duration={1000}>
            уроки
          </Link>
        </li>

        <li className='p-4 cursor-pointer' id='prices'>
          <Link to="lessons" spy={true} smooth={true} offset={1300} duration={1000}>
            Цены
          </Link>
        </li>

        <li className='p-4 cursor-pointer' id='contact'>
          <Link to="lessons" spy={true} smooth={true} offset={2000} duration={1000}>
            контакт
          </Link>
        </li>

      </ul>

    </div>
 
  )
}

export default NavBar
