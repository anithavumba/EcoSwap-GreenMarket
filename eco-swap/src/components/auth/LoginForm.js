// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '/home/EcoSwap-GreenMarket/eco-swap/src/firebaseConfig';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
