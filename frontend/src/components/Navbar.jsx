import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo" style={{ color: '#2196f3', fontWeight: 700, fontSize: 24, marginRight: 16 }}>&#9679;</span>
        <ul className="navbar-links">
          {['Calendar', 'Finder', 'Flow', 'Recalls', 'Messages', 'Patient', 'Fees', 'Modules', 'Procedures', 'Admin', 'Reports', 'Miscellaneous', 'Popups'].map(link => (
            <li key={link}><a href="#" className="navbar-link">{link}</a></li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <input className="navbar-search" type="text" placeholder="Search by any demograph..." />
        <span className="navbar-user">
          <span className="navbar-badge">2</span>
          <span className="navbar-user-icon" style={{ marginLeft: 16, fontSize: 28, color: '#2196f3' }}>&#9675;</span>
        </span>
      </div>
    </nav>
  );
} 