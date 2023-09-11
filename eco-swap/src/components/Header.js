import React from 'react';

function Header() {
  return (
    <header>
      <h1>EcoSwap-GreenMarket</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/items">Items</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
