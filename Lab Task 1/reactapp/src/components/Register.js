// Register.js
import React, { useState } from 'react'; // Import useState from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password,
      });

      console.log('Registration successful', response.data);

      // Redirect to the login page after successful registration
      navigate('/login');
    } catch (error) {
      console.error('Registration failed', error.response.data.message);
      // Handle any additional logic for a failed registration if needed
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
