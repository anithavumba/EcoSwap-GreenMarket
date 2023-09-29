import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

function isEmailValid(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!isEmailValid(email)) {
      console.error('Invalid email format');
      return; // Don't proceed with registration if the email format is invalid
    }

    try {
      // Create an object to store additional user data
      const userData = {
        username,
        name,
        surname,
        address,
        contactNumber,
      };

      const auth = getAuth(); // Initialize Firebase auth
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Access the user object from the credential
      const user = userCredential.user;

      // Update the user's profile with additional data
      await updateProfile(user, userData);

      navigate('/dashboard');
    } catch (error) {
      console.error('Registration error:', error.code, error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
