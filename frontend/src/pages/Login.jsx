import React from "react";

function Login() {

  const handleDelete = (e) => {
    e.preventDefault()
    localStorage.clear()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'))

    if (savedUser && savedUser.username && savedUser.password) {
      alert("Login Succesfull!")
      console.log(savedUser)

    } else {
      alert("Wrong Credentials")
    }

    //navigate('/home')
  }

  return (
    <div className='bg-gray-800 items-center justify-center'>
      <form className='flex flex-col justify-center items-center'>
        <input className='p-2 m-2 rounded-md' required type="text" name="username" placeholder='Enter your name..' />
        <input className='p-2 m-2 rounded-md' required type="password" name="password" placeholder='Enter your password..' />
        <button className='bg-teal-400 text-teal-100 p-2 m-2 rounded-md hover:bg-teal-950 hover:text-teal-50' type="submit" onClick={handleSubmit}>Login</button>
        <button className="bg-gray-100 text-black p-2 m-2" type="button" onClick={handleDelete}>delete</button>
      </form>
    </div>

  )
}

export default Login
