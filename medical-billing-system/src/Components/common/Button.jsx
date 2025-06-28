import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'default', 
  size = 'medium', 
  fullWidth = false,
  icon,
  onClick
}) => {
  return (
    <button 
      className={`custom-button ${variant} ${size} ${fullWidth ? 'full-width' : ''}`}
      onClick={onClick}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;