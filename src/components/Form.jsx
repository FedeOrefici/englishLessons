import React from "react";
import { useFormik } from "formik";
import email from '../assets/email.png';

const initialValues ={
    name: '',
    email: '',
    message: ''
};

const onSubmit = values => {
    console.log(values);
};

const validate = values => {
    let errors = {};
        if(!values.name) {
            errors.name = 'Required';
        };
        if(!values.email){
            errors.email = 'Required';
        } else if((!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
            errors.email = 'Invalid email format';
        };
        if(!values.message){
            errors.email = 'Required';
        };

    return errors;

}

const Formulary = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  });

  console.log('form errors', formik.errors);

  return (
    <>
    <div className="w-full bg-gray-100 mx-auto flex justify-center items-center gap-20">
        <div className="bg-gray-100 py-12 w-2/4">
        <form 
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col p-20 rounded-lg bg-[#00df9a] shadow-xl">
            <label className='mt-6'>имя</label>
                <input 
                value={formik.values.name}
                onChange={formik.handleChange}
                id='name' type='text' placeholder='имя...'
                className="border border-gray-400 bg-white mt-1 p-1"
                />

            {formik.errors.name ? <div className="bg-red-600 rounded text-center text-[white] p-1 mt-1">{formik.errors.name}</div> : null}
            
            

            <label className='mt-6'>Эл. адрес</label>
                <input 
                value={formik.values.email}
                onChange={formik.handleChange}
                id='email' type='email' placeholder='Эл. адрес...'
                className="border border-gray-400 bg-white mt-1 p-1"
                />

            {formik.errors.email? <div className="bg-red-600 rounded text-center text-[white] p-1 mt-1">{formik.errors.email}</div> : null}

            <label className='mt-6'>сообщение</label>
                <input 
                value={formik.values.message}
                onChange={formik.handleChange}
                id='message' type='text'
                className="border border-gray-400 bg-white mt-1 h-32"
                />

            {formik.errors.message? <div className="bg-red-600 rounded text-center text-[white] p-1 mt-1">{formik.errors.message}</div> : null}

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