import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left-controls">
        <button className="navigation-button">
          <span>←</span>
        </button>
        <div className="address-bar">
          <span className="protocol-icon">ℹ️</span>
          <span className="url">localhost:8300/interface/main/tabs/main.php</span>
        </div>
      </div>
      <div className="tab-title">OpenEMR</div>
      <div className="right-controls">
        <button className="control-button">−</button>
        <button className="control-button">□</button>
        <button className="control-button">×</button>
      </div>
    </header>
  );
};

export default Header;