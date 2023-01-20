import React from "react";
import { useFormik } from "formik";
import email from '../assets/email.png'

const Formulary = () => {
  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        message: ''
    }
  });

console.log(formik);

  return (
    <>
    <div className="w-full bg-white mx-auto flex justify-center items-center gap-20">
        <div className="bg-white py-12 w-2/4">
        <form className="w-full flex flex-col p-20 rounded-lg bg-gray-200">
            <label className='mt-6'>имя</label>
                <input 
                value={formik.values.name}
                onChange={formik.handleChange}
                id='name' type='text' placeholder='имя...'
                className="border border-gray-400 bg-white mt-1 p-1"
                />

            <label className='mt-6'>Эл. адрес</label>
                <input 
                value={formik.values.email}
                onChange={formik.handleChange}
                id='email' type='email' placeholder='Эл. адрес...'
                className="border border-gray-400 bg-white mt-1 p-1"
                />

            <label className='mt-6'>сообщение</label>
                <input 
                value={formik.values.message}
                onChange={formik.handleChange}
                id='message' type='text'
                rows="4" cols="50"
                className="border border-gray-400 bg-white mt-1 h-32"
                />

            <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]" type="submit">Отправить</button>
        </form>
        </div>

        <div className="flex justify-center items-center flex-col">
            <img src={email} alt="iconContact" />
            <h1 className="font-bold text-4xl text-[#00df9a]">контакт</h1>
            <p className="font-normal">Свяжитесь с нами и начните учить английский</p>
        </div>
    </div>
    </>
  )
}

export default Formulary