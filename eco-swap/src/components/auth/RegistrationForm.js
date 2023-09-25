// RegistrationForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '/home/EcoSwap-GreenMarket/eco-swap/src/firebaseConfig';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Bind email input to setEmail
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Bind password input to setPassword
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
