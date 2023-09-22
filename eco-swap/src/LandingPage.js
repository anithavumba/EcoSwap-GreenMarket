// LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to EcoSwap GreenMarket</h1>
      <p>Your one-stop destination for eco-friendly products and sustainable living.</p>
      <p>Explore a wide range of eco-friendly items, from clothing to home goods, and make a positive impact on the environment.</p>
      
      <Link to="/register">
        <button>Register</button>
      </Link>
      
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default LandingPage;
