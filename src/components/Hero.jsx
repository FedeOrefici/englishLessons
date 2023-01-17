import React from 'react';
import Typed from "typed.js";
import { useEffect, useRef } from 'react';

const Hero = () => {
    const element = useRef(null)
    
    useEffect(() => {
        const typed = new Typed(element.current, {
            strings : ['Hello!', 'How are you?', 'Let´s talk !'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
            showCursor: true,
            cursorChar: "",
        });
        return () => {
            typed.destroy();
        };
    }, []);

  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
           <p className='text-[#00df9a] font-bold text-4xl'>индивидуальные уроки</p>
           <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>индивидуальный или групповой</h1>
           <div className='flex justify-center gap-6 items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>гибкий график</p>
                <span
                    className='md:text-5xl sm:text-4xl text-[#00df9a] font-bold md:pl-4 pl-2'
                    ref={element}></span>
           </div>
           <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Начать</button>
        </div>
    </div>
  )
}

export default Hero
