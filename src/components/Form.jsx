import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import email from '../assets/email.png';
import * as Yup from 'yup';
import { useState } from "react";
import Modal from "./Modal";
import emailjs from '@emailjs/browser';


const initialValues ={
    name: '',
    email: '',
    message: ''
};

const onSubmit = (initialValues, {resetForm}, event) => {
    resetForm({initialValues:{name:'', email:'', message:''}});
    event.preventDefault(); 
        emailjs.sendForm('service_p5zko9v', 'template_56pagng', event.target, 'user_P4uidKqTRPNVn7dZNmwLs')
        .then(response => console.log(response))
        .then(erorr => console.log(erorr))
};


const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
            .email('Invalid email format!')
            .required('Required!'),
    message: Yup.string()
            .required('Required!')
})



const Formulary = () => {
    //modal State
    const [openModal, setOpenModal] = useState(false);

    //form
    const sendEmailMessage = (e) => { 
        emailjs.sendForm('service_p5zko9v', 'template_lqzr0y8', e.target, 'user_P4uidKqTRPNVn7dZNmwLs')
        .then((result) => {
            console.log(result)})
        .then((error) => {
            console.log(error)}
        );
    }

  return (
    <>
        <div className="w-full bg-gray-100 mx-auto flex justify-center items-center max-sm:flex-col max-sm:gap-0" id="contact">


            <h1 className="font-bold text-5xl text-black max-sm:pt-10 sm:hidden">контакт</h1>
                

            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            
            <Form
            className="w-[500px] flex flex-col p-20 my-12 mx-auto rounded-lg bg-[#00df9a] shadow-xl max-sm:w-[300px] max-sm:items-center"
            onSubmit={sendEmailMessage}>

                    <label className='mt-6'>имя</label>
                    <Field
                    id='name' type='text' placeholder='имя...'
                    name='name'
                    className="border border-gray-400 bg-white mt-1 rounded"
                    />

                    <ErrorMessage
                    component='div'
                    className="bg-red-600 rounded text-center text-[white] p-1 mt-1"
                    name='name'/>

                    <label className='mt-6'>Эл. адрес</label>
                    <Field 
                    id='email' type='email' placeholder='Эл. адрес...'
                    name='email'
                    className="border border-gray-400 bg-white mt-1 rounded"
                    />

                    <ErrorMessage
                    component='div'
                    className="bg-red-600 rounded text-center text-[white] p-1 mt-1"
                    name='email'/>

                    <label className='mt-6'>сообщение</label>
                    <Field
                    id='message' type='text'
                    name='message'
                    className="border border-gray-400 bg-white h-32 rounded col-auto row-span-full"
                    />

                <ErrorMessage
                component='div'
                className="bg-red-600 rounded text-center text-[white] mt-1"
                name='message'/>

                <button 
                onClick={() => {
                    setOpenModal(true)
                }}
                className="bg-black w-[200px] rounded font-medium my-6 py-3 text-[#00df9a] mx-auto" type="submit">
                Отправить
                </button>
                {(openModal) && <Modal open={openModal} />}
            
            </Form>

            </Formik>

            <div className="flex justify-center items-center flex-col max-sm:mb-40 mx-auto">
                <img src={email} alt="iconContact" className="max-sm:hidden" />
                <h1 className="font-bold text-4xl text-[#00df9a] max-sm:hidden">контакт</h1>
                <p className="font-normal max-sm:hidden">Свяжитесь с нами и начните учить английский</p>
            </div>
        </div>
    </>
  )
}

export default Formulary