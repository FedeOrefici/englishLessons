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
        <div className="w-full bg-gray-100 mx-auto flex justify-center items-center gap-20">

            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
            
            <Form
            className="w-2/4 flex flex-col p-20 my-12 rounded-lg bg-[#00df9a] shadow-xl"
            onSubmit={sendEmailMessage}>

                    <label className='mt-6'>имя</label>
                    <Field 
                    id='name' type='text' placeholder='имя...'
                    name='name'
                    className="border border-gray-400 bg-white mt-1 p-1 rounded"
                    />

                    <ErrorMessage
                    component='div'
                    className="bg-red-600 rounded text-center text-[white] p-1 mt-1"
                    name='name'/>

                    <label className='mt-6'>Эл. адрес</label>
                    <Field 
                    id='email' type='email' placeholder='Эл. адрес...'
                    name='email'
                    className="border border-gray-400 bg-white mt-1 p-1 rounded"
                    />

                    <ErrorMessage
                    component='div'
                    className="bg-red-600 rounded text-center text-[white] p-1 mt-1"
                    name='email'/>

                    <label className='mt-6'>сообщение</label>
                    <Field
                    id='message' type='text'
                    name='message'
                    className="border border-gray-400 bg-white mt-1 h-32 rounded"
                    />

                <ErrorMessage
                component='div'
                className="bg-red-600 rounded text-center text-[white] p-1 mt-1"
                name='message'/>

                <button 
                onClick={() => {
                    setOpenModal(true)
                }}
                className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a]" type="submit">
                Отправить
                </button>
                {(openModal) && <Modal open={openModal} />}
            
            </Form>

            </Formik>

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