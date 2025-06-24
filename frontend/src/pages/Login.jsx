import React, { useState } from "react";

function Login() {

  const [form, setForm] = useState({
    username: '',
    password: ''
  })


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
        <input className='p-2 m-2 rounded-md' onChange={handleChange} required type="password" name="password" value={form.password} placeholder='Enter your password..' />
        <button className='bg-teal-400 text-teal-100 p-2 m-2 rounded-md hover:bg-teal-950 hover:text-teal-50' type="submit" onClick={handleSubmit}>Login</button>

      </form>
    </div>

  )
}

export default Login
