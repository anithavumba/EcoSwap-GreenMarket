import React from 'react';

const Button = ({ label, onClick, variant }) => {
  return (
    <button
      className={`button ${variant ? variant : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
