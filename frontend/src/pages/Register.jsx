import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //    navigate('/login')
    alert("The form is working fine!")
  }


  return (
    <div className='bg-gray-800 items-center justify-center'>
      <form className='flex flex-col justify-center items-center'>
        <input className='p-2 m-2 rounded-md' onChange={handleChange} required type="text" name="name" value={form.username} placeholder='Enter your name..' />
        <input className='p-2 m-2 rounded-md' onChange={handleChange} required type="email" name="email" value={form.email} placeholder='Enter your email..' />
        <input className='p-2 m-2 rounded-md' onChange={handleChange} required type="password" name="password" value={form.password} placeholder='Enter your password..' />
        <button className='bg-teal-400 text-teal-100 p-2 m-2 rounded-md hover:bg-teal-950 hover:text-teal-50' type="submit" onClick={handleSubmit}>Signup</button>

      </form>
    </div>

  );
}

export default Register
