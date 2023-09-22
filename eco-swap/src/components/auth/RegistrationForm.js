import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';

function RegistrationForm() {
  const [email, setEmail] = useState(''); // Use setEmail to update the email state
  const [password, setPassword] = useState(''); // Use setPassword to update the password state
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push('/dashboard'); // Redirect to the dashboard upon successful registration
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
            required
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
