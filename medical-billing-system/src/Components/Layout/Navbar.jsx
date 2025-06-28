import React from 'react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    'Calendar', 
    'Finder', 
    'Flow', 
    'Recalls', 
    'Messages', 
    'Patient', 
    'Fees', 
    'Modules', 
    'Procedures', 
    'Admin', 
    'Reports', 
    'Miscellaneous', 
    'Popups'
  ];

  const openTabs = [
    { id: 'calendar', name: 'Calendar' },
    { id: 'message', name: 'Message Center' },
    { id: 'billing', name: 'Billing Manager' }
  ];

  return (
    <>
      <nav className="main-nav">
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`nav-item ${item === 'Fees' ? 'active' : ''}`}
              onClick={() => item === 'Fees' && setActiveTab('billing')}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by any demographic" 
            className="search-input" 
          />
          <button className="search-button">
            <span role="img" aria-label="search">🔍</span>
          </button>
        </div>
      </nav>

      <div className="tabs">
        {openTabs.map((tab) => (
          <div 
            key={tab.id} 
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.name}
            <button className="tab-close">×</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;