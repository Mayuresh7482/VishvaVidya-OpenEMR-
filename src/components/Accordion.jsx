import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ marginBottom: '10px' }}>
      <a
        href="#"
        style={{
          display: 'block',
          width: '100%',
          background: '#6c757d',
          color: '#fff',
          padding: '16px',
          fontSize: '18px',
          textDecoration: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          outline: 'none',
        }}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {title}
      </a>
      {isOpen && (
        <div style={{ padding: '16px', background: '#f8f9fa' }}>
          {title === 'Who' ? (
            <div>
              <label>Title:</label>
              <select style={{ width: '100%', marginBottom: '8px' }}>
                <option>Unassigned</option>
              </select>
              <label>Name:</label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <input type="text" placeholder="First Name" style={{ flex: 1 }} />
                <input type="text" placeholder="Middle Name" style={{ flex: 1 }} />
                <input type="text" placeholder="Last Name" style={{ flex: 1 }} />
                <input type="text" placeholder="Name Suffix" style={{ flex: 1 }} />
              </div>
              <label>Preferred Name:</label>
              <input type="text" placeholder="Patient preferred name or name pattern" style={{ width: '100%', marginBottom: '8px' }} />
              <label>Birth Name:</label>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                <input type="text" placeholder="Birth First Name" style={{ flex: 1 }} />
                <input type="text" placeholder="Middle Name" style={{ flex: 1 }} />
                <input type="text" placeholder="Birth Last Name" style={{ flex: 1 }} />
              </div>
              <label>DOB:</label>
              <input type="date" style={{ width: '100%', marginBottom: '8px' }} />
              <label>Gender Identity:</label>
              <select style={{ width: '100%', marginBottom: '8px' }}>
                <option>Unassigned</option>
              </select>
              <label>External ID:</label>
              <input type="text" placeholder="External ID" style={{ width: '100%', marginBottom: '8px' }} />
              <label>License/ID:</label>
              <input type="text" placeholder="License/ID" style={{ width: '100%', marginBottom: '8px' }} />
              <label>User Defined:</label>
              <input type="text" placeholder="User Defined" style={{ width: '100%', marginBottom: '8px' }} />
              <label>Billing Note:</label>
              <input type="text" placeholder="Billing Note" style={{ width: '100%', marginBottom: '8px' }} />
              <label>Previous Names:</label>
              <input type="text" placeholder="Previous Names" style={{ width: '100%', marginBottom: '8px' }} />
            </div>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
};

export default Accordion;
