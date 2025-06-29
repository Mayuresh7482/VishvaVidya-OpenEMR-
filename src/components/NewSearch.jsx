import React, { useState } from 'react';
import Accordion from './Accordion';

const NewSearch = () => {
  const [additionalAddresses, setAdditionalAddresses] = useState([]);
  const [industryOptions, setIndustryOptions] = useState([
    'Unassigned',
    'Law Firm',
    'Engineering Firm',
    'Construction Firm',
  ]);
  const [showIndustryInput, setShowIndustryInput] = useState(false);
  const [newIndustry, setNewIndustry] = useState('');
  const [showStateInput, setShowStateInput] = useState(false);
  const [newStateName, setNewStateName] = useState('');
  const [newStateAbbr, setNewStateAbbr] = useState('');
  const [newPostalCode, setNewPostalCode] = useState('');

  const usStates = [
    'Unassigned',
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
    'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
    'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
    'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  const addAddressForm = () => {
    setAdditionalAddresses([...additionalAddresses, { id: Date.now(), expanded: false }]);
  };

  const toggleAddressForm = (id) => {
    setAdditionalAddresses(
      additionalAddresses.map((address) =>
        address.id === id ? { ...address, expanded: !address.expanded } : address
      )
    );
  };

  const deleteAddressForm = (id) => {
    setAdditionalAddresses(additionalAddresses.filter((address) => address.id !== id));
  };

  return (
    <div style={{ width: '80%', margin: '40px auto', padding: '20px', background: '#f8f9fa', borderRadius: '8px' }}>
      <h2 style={{ color: '#333', fontSize: '36px', marginBottom: '24px', textAlign: 'left', fontWeight: 700, letterSpacing: '-1px' }}>Search or Add Patient</h2>
      <div style={{ maxWidth: '100%', margin: '0 auto' }}>
        <Accordion title="Who" style={{ marginBottom: '8px', border: 'none', boxShadow: 'none' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 150px',
            gap: '10px',
            marginBottom: '10px',
            background: '#f0f6ff',
            border: '1px solid #b6d4fe',
            borderRadius: '8px',
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 123, 255, 0.08)'
          }}>
            <input type="text" placeholder="First Name" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingLeft: '10px' }}>Name:</label>
            <input type="text" placeholder="Middle Name" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingLeft: '10px' }}>Middle Name:</label>
            <input type="text" placeholder="Last Name" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingLeft: '10px' }}>Last Name:</label>
            <input type="text" placeholder="Name Suffix" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingLeft: '10px' }}>Name Suffix:</label>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>DOB:</label>
            <input type="date" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Sex:</label>
            <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option>Unassigned</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Phone:</label>
            <input type="text" placeholder="Phone Number" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Email:</label>
            <input type="email" placeholder="Email Address" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <label style={{ fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Title:</label>
          <select
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginBottom: '10px',
              backgroundColor: '#ff8c00',
              color: '#fff',
            }}
          >
            <option>Unassigned</option>
            <option>Mr.</option>
            <option>Mrs.</option>
            <option>Ms.</option>
            <option>Dr.</option>
            <option>Msr.</option>
            <option>Ms Dr.</option>
          </select>
          <select style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }}>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
          <input type="text" placeholder="Employer Name" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }} />
          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <input type="text" placeholder="Height" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <input type="text" placeholder="Weight" style={{ flex: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <textarea placeholder="Notes" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }} />
          <input type="text" placeholder="Guardian Name" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }} />
          <input type="text" placeholder="Insurance Provider" style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '10px' }} />
        </Accordion>
        <Accordion title="Contact" style={{ marginBottom: '8px', border: 'none', boxShadow: 'none' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 150px 1fr', gap: '10px', marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Address:</label>
            <input type="text" placeholder="Address" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Address Line 2:</label>
            <input type="text" placeholder="Address Line 2" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>City:</label>
            <input type="text" placeholder="City" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>State:</label>
            <input type="text" placeholder="State" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Postal Code:</label>
            <input type="text" placeholder="Postal Code" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>County:</label>
            <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option>Unassigned</option>
            </select>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Country:</label>
            <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
              <option>Unassigned</option>
            </select>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Emergency Contact:</label>
            <input type="text" placeholder="Emergency Contact" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Mother's Name:</label>
            <input type="text" placeholder="Mother's Name" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Emergency Phone:</label>
            <input type="text" placeholder="Emergency Phone" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Home Phone:</label>
            <input type="text" placeholder="Home Phone" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Work Phone:</label>
            <input type="text" placeholder="Work Phone" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Mobile Phone:</label>
            <input type="text" placeholder="Mobile Phone" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Trusted Email:</label>
            <input type="email" placeholder="Trusted Email" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Contact Email:</label>
            <input type="email" placeholder="Contact Email" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
          <div style={{ marginTop: '20px', border: '1px solid #ccc', borderRadius: '4px', padding: '10px', background: '#f8f9fa' }}>
            <h3 style={{ marginBottom: '10px', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>Additional Addresses</h3>
            {additionalAddresses.map((address) => (
              <div key={address.id} style={{ marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px', padding: '10px', background: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold' }}>Address Form</span>
                  <div>
                    <button
                      onClick={() => toggleAddressForm(address.id)}
                      style={{ marginRight: '10px', background: 'none', border: 'none', cursor: 'pointer', color: '#007bff' }}
                    >
                      {address.expanded ? '▼' : '▶'}
                    </button>
                    <button
                      onClick={() => deleteAddressForm(address.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}
                    >
                      ❌
                    </button>
                  </div>
                </div>
                {address.expanded && (
                  <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr 150px 1fr', gap: '10px' }}>
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Address Use:</label>
                    <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                      <option>Unassigned</option>
                    </select>
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Address Type:</label>
                    <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                      <option>Unassigned</option>
                    </select>
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Start Date:</label>
                    <input type="date" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>End Date:</label>
                    <input type="date" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Address:</label>
                    <input type="text" placeholder="Address" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Address Line 2:</label>
                    <input type="text" placeholder="Address Line 2" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>City:</label>
                    <input type="text" placeholder="City" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>County/District:</label>
                    <input type="text" placeholder="County/District" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>State:</label>
                    <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                      <option>Unassigned</option>
                    </select>
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Postal Code:</label>
                    <input type="text" placeholder="Postal Code" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Country:</label>
                    <select style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}>
                      <option>Unassigned</option>
                    </select>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={addAddressForm}
              style={{ marginTop: '10px', padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              ➕ Add Address
            </button>
          </div>
        </Accordion>
        <Accordion title="Choices" style={{ marginBottom: '8px', border: 'none', boxShadow: 'none' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '10px',
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '24px',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Provider:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Referring Provider:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Pharmacy:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option></option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>HIPAA Notice Received:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Leave Message With:</label>
                <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Allow SMS:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Allow Immunization Registry Use:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Allow Health Information Exchange:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Prevent API Access:</label>
                <input type="checkbox" style={{ width: 18, height: 18 }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Immunization Registry Status:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Publicity Code:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Protection Indicator:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Care Team (Provider):</label>
                <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Care Team (Facility):</label>
                <input type="checkbox" style={{ width: 18, height: 18 }} />
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Provide Since Date:</label>
                <input type="date" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Allow Voice Message:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Allow Mail Message:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Allow Email:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Allow Immunization Info Sharing:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Allow Patient Portal:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Unassigned</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>CMS Portal Login:</label>
                <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Immunization Registry Status Effective Date:</label>
                <input type="date" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Publicity Code Effective Date:</label>
                <input type="date" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Protection Indicator Effective Date:</label>
                <input type="date" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Care Team Status:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}><option>Active</option><option>Inactive</option></select>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ minWidth: 200, fontWeight: 'bold', marginRight: 8 }}>Patient Categories:</label>
                <select multiple style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', height: 60 }}>
                  <option>Unassigned</option>
                  <option>Group I</option>
                  <option>Group II</option>
                  <option>Group III</option>
                </select>
              </div>
            </div>
          </div>
        </Accordion>
        <Accordion title="Employer" style={{ marginBottom: '8px', border: 'none', boxShadow: 'none' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '10px',
            background: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '24px',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <label style={{ minWidth: 140, fontWeight: 'bold', marginRight: 8 }}>Occupation:</label>
                <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <label style={{ minWidth: 140, fontWeight: 'bold', marginRight: 8 }}>Employer Name:</label>
                <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <label style={{ minWidth: 140, fontWeight: 'bold', marginRight: 8 }}>Employer Address Line 2:</label>
                <input type="text" style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <label style={{ minWidth: 140, fontWeight: 'bold', marginRight: 8 }}>State:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginRight: 8 }}>
                  {usStates.map(state => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
                <button style={{ padding: '6px 16px', marginLeft: 4, background: '#e0e0e0', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Add</button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                <label style={{ minWidth: 140, fontWeight: 'bold', marginRight: 8 }}>Country:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginRight: 8 }}><option>Unassigned</option></select>
                <button style={{ padding: '6px 16px', marginLeft: 4, background: '#e0e0e0', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>Add</button>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', position: 'relative' }}>
                <label style={{ minWidth: 120, fontWeight: 'bold', marginRight: 8 }}>Industry:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginRight: 8 }}>
                  {industryOptions.map(option => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <button
                  style={{ padding: '6px 16px', marginLeft: 4, background: '#e0e0e0', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
                  onClick={() => setShowIndustryInput(true)}
                >
                  Add
                </button>
                {showIndustryInput && (
                  <div style={{
                    position: 'absolute',
                    left: '100%',
                    top: 0,
                    background: '#fff',
                    border: '1px solid #888',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    padding: '12px',
                    zIndex: 10,
                    minWidth: 220,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}>
                    <input
                      type="text"
                      value={newIndustry}
                      onChange={e => setNewIndustry(e.target.value)}
                      style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: 8 }}
                      autoFocus
                    />
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        style={{ background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '6px 16px', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                          if (newIndustry && !industryOptions.includes(newIndustry)) {
                            setIndustryOptions([...industryOptions, newIndustry]);
                          }
                          setNewIndustry('');
                          setShowIndustryInput(false);
                        }}
                      >
                        Add
                      </button>
                      <button
                        style={{ background: '#e0e0e0', color: '#333', border: 'none', borderRadius: '4px', padding: '6px 16px', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                          setShowIndustryInput(false);
                          setNewIndustry('');
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px', position: 'relative' }}>
                <label style={{ minWidth: 140, fontWeight: 'bold', marginRight: 8 }}>State:</label>
                <select style={{ flex: 1, padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginRight: 8 }}>
                  {usStates.map(state => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
                <button
                  style={{ padding: '6px 16px', marginLeft: 4, background: '#e0e0e0', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}
                  onClick={() => setShowStateInput(true)}
                >
                  Add
                </button>
                {showStateInput && (
                  <div style={{
                    position: 'absolute',
                    left: '100%',
                    top: 0,
                    background: '#fff',
                    border: '1px solid #888',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                    padding: '16px',
                    zIndex: 10,
                    minWidth: 320,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}>
                    <div style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 8, textAlign: 'center' }}>Enter new Employer Address</div>
                    <label style={{ fontWeight: 'bold' }}>Employer Address:</label>
                    <input
                      type="text"
                      value={newStateName}
                      onChange={e => setNewStateName(e.target.value)}
                      style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: 8 }}
                      autoFocus
                    />
                    <label style={{ fontWeight: 'bold' }}>City:</label>
                    <input
                      type="text"
                      value={newStateAbbr}
                      onChange={e => setNewStateAbbr(e.target.value)}
                      style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: 8 }}
                    />
                    <label style={{ fontWeight: 'bold' }}>Postal Code:</label>
                    <input
                      type="text"
                      value={newPostalCode}
                      onChange={e => setNewPostalCode(e.target.value)}
                      style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', marginBottom: 8 }}
                    />
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
                      <button
                        style={{ background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '6px 16px', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                          // Add logic to save new employer address/city/postal code
                          setShowStateInput(false);
                          setNewStateName('');
                          setNewStateAbbr('');
                          setNewPostalCode('');
                        }}
                      >
                        Add
                      </button>
                      <button
                        style={{ background: '#e0e0e0', color: '#333', border: 'none', borderRadius: '4px', padding: '6px 16px', fontWeight: 'bold', cursor: 'pointer' }}
                        onClick={() => {
                          setShowStateInput(false);
                          setNewStateName('');
                          setNewStateAbbr('');
                          setNewPostalCode('');
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                    <div style={{ marginTop: 12 }}>
                      <div style={{ fontWeight: 'bold', marginBottom: 4 }}>Delete a State:</div>
                      {usStates.filter(s => s !== 'Unassigned').map(state => (
                        <div key={state} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                          <span>{state}</span>
                          <button
                            style={{ background: 'red', color: '#fff', border: 'none', borderRadius: '4px', padding: '2px 8px', fontWeight: 'bold', cursor: 'pointer' }}
                            onClick={() => {
                              const idx = usStates.indexOf(state);
                              if (idx > -1) usStates.splice(idx, 1);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Accordion>
        <Accordion title="Stats" style={{ marginBottom: '8px', border: 'none', boxShadow: 'none' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Height:</label>
            <input type="text" placeholder="Height" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Weight:</label>
            <input type="text" placeholder="Weight" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
        </Accordion>
        <Accordion title="Miscellaneous" style={{ marginBottom: '8px', border: 'none', boxShadow: 'none' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Notes:</label>
            <textarea placeholder="Notes" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
        </Accordion>
        <Accordion title="Guardian" style={{ marginBottom: '8px', border: 'none', boxShadow: 'none' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Guardian Name:</label>
            <input type="text" placeholder="Guardian Name" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
        </Accordion>
        <Accordion title="Insurance" style={{ marginBottom: '8px', border: 'none', boxShadow: 'none' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '10px', marginBottom: '10px' }}>
            <label style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '10px' }}>Insurance Provider:</label>
            <input type="text" placeholder="Insurance Provider" style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }} />
          </div>
        </Accordion>
      </div>
      <div style={{ marginTop: '20px', marginBottom: '20px', position: 'relative' }}>
        <input
          type="text"
          placeholder="Search Patient"
          style={{ width: '100%', padding: '10px 40px 10px 10px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <span
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#ccc',
            pointerEvents: 'none',
          }}
        >
          🔍
        </span>
      </div>
      <div style={{ marginTop: '20px' }}>
        <button style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', width: '100%' }}>
          Create New Patient
        </button>
      </div>
    </div>
  );
};

export default NewSearch;
