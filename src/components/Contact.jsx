// import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
//       <form method='POST' action="https://getform.io/f/lbkmgnqb" className='flex flex-col max-w-[600px] w-full'>
//         <div className=' pb-8'>
//             <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//             <p className='text-gray-300 py-4'>Submit the form below or shoot me an email at <a className='hover:text-yellow-300' href='mailto:fjoseph@umass.com'>femyjp97@gmail.com </a> </p>
//         </div>
//         <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/> 
//         <input className='my-4  p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
//         <textarea className='bg-[#ccd6f6] p-2' name="message" rows='10' placeholder='Message'/>
//         <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-4 my-8 mx-auto flex items-center'>Lets connect</button>
//       </form>
//     </div>
//   )
// }
// export default Contact;

import React, { useState } from 'react';

const Contact = () => {
  // State variables to store form data and validation errors
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form fields
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      validationErrors.email = 'Valid email is required';
    }
    if (!formData.message.trim()) {
      validationErrors.message = 'Message is required';
    }
  
    // If there are validation errors, update state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  
    // If form is valid, submit the form
    try {
      const response = await fetch("https://getform.io/f/lbkmgnqb", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully:', formData);
        setFormData({ name: '', email: '', message: '' });

        // Redirect to the thank you page
        window.location.href = 'https://getform.io/thank-you?id=lbkmgnqb';
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Form submission error:', error.message);
    }
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear validation error when user starts typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-[600px] w-full'>
        <div className=' pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form below or shoot me an email at <a className='hover:text-yellow-300' href='mailto:fjoseph@umass.com'>femyjp97@gmail.com </a> </p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
        {errors.name && <p className='text-red-500'>{errors.name}</p>}
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
        {errors.email && <p className='text-red-500'>{errors.email}</p>}
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows='10' placeholder='Message' value={formData.message} onChange={handleChange} />
        {errors.message && <p className='text-red-500'>{errors.message}</p>}
        <button type='submit' className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-4 my-8 mx-auto flex items-center'>Lets connect</button>
      </form>
    </div>
  );
};

export default Contact;
