import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} EcoSwap-GreenMarket</p>
      <ul>
        <li><a href="/terms">Terms of Use</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
