
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_hbnb8bf', 'template_2qsvulv', form.current, {
          publicKey: 'DaO91s79Hy4AZvAqg',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log('message sent');
            
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
  
    
    return (
      <div className='container h-screen mx-auto flex items-center justify-center'>
        
        <form className=' flex flex-col items-center justify-center bg-gray-600 p-5 h-3/4 w-3/4 rounded-lg' ref={form} onSubmit={sendEmail}>
        <h1 className='text-4xl font-extrabold text-white mb-10'>Contacts</h1>
        <label className='text-indigo-400 font-bold w-full'>Name</label>
        <input className='pl-3 h-[5%] w-full' type="text" name="user_name" />
        <label className=' text-indigo-400 font-bold w-full'>Email</label>
        <input className='pl-3 h-[5%] w-full' type="email" name="user_email" />
        <label className='text-indigo-400 font-bold w-full'>Message</label>
        <textarea className='pl-3 text-start w-full h-[40%]' name="message" />
        <input className=' w-3/4 bg-indigo-500 text-white text-lg py-2 font-semibold mt-10 rounded-full' type="submit" value="Send" />
      </form>
      </div>
    )
}

export default Contact