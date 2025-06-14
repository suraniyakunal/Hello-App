import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  return (
    <div>
      <input required type="text" name="name" value={username} placeholder='Enter your name..' />
      <input required type="email" name="email" value={email} placeholder='Enter your email..' />
      <input required type="password" name="password" value={password} placeholder='Enter your password..' />

    </div>

  );
}

export default Register
