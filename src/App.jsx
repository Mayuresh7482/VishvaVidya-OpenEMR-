import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PatientForm from './components/PatientForm.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewSearch from './components/NewSearch.jsx';
import Dashboard from './components/Dashboard.jsx';
import Visits from './components/Visits.jsx';
import Records from './components/Records.jsx';

function App() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <Router>
      <style>
        {`
          @media (max-width: 768px) {
            nav ul {
              flex-direction: column;
            }
            nav ul li ul {
              position: static;
              box-shadow: none;
            }
          }
        `}
      </style>
      <nav style={{ background: '#f8f9fa', padding: '10px', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '10px', flexWrap: 'wrap', margin: 0, padding: 0 }}>
          <li>
            <div style={{ position: 'relative' }}>
              <button
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', padding: '10px' }}
                onClick={toggleDropdown}
              >
                Patient
              </button>
              {dropdownOpen && (
                <ul
                  style={{
                    position: 'absolute',
                    background: '#fff',
                    listStyle: 'none',
                    padding: '10px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    margin: 0,
                  }}
                >
                  <li><Link to="/new-search" onClick={closeDropdown}>New/Search</Link></li>
                  <li><Link to="/dashboard" onClick={closeDropdown}>Dashboard</Link></li>
                  <li><Link to="/visits" onClick={closeDropdown}>Visits</Link></li>
                  <li><Link to="/records" onClick={closeDropdown}>Records</Link></li>
                </ul>
              )}
            </div>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/new-search" element={<NewSearch />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/visits" element={<Visits />} />
        <Route path="/records" element={<Records />} />
      </Routes>
    </Router>
  );
}

export default App
