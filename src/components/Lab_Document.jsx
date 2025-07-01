import React, { useState } from 'react';



export default function Lab_Document() {

  const [fromDate, setFromDate] = useState('2025-06-22');

  const [toDate, setToDate] = useState('2025-06-29');



  return (

    <div className="lab-documents-center">

      <div className="lab-documents-content">

        <h2 style={{ textAlign: 'left', marginBottom: 32, marginTop: 0 }}>Lab Documents</h2>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>

          <label htmlFor="from-date">From:</label>

          <input

            id="from-date"

            type="date"

            value={fromDate}

            onChange={e => setFromDate(e.target.value)}

            style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4 }}

          />

          <label htmlFor="to-date">To:</label>

          <input

            id="to-date"

            type="date"

            value={toDate}

            onChange={e => setToDate(e.target.value)}

            style={{ padding: '6px 10px', border: '1px solid #ccc', borderRadius: 4 }}

          />

          <button style={{ background: '#2196f3', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 18px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>

            <span style={{ fontSize: 18, display: 'inline-block', transform: 'rotate(0deg)' }}>&#8635;</span> Refresh

          </button>

        </div>

        <div style={{ background: '#fff', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden' }}>

          <table style={{ width: '100%', borderCollapse: 'collapse' }}>

            <thead>

              <tr style={{ background: '#f5f7fa' }}>

                <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: 600, color: '#555' }}>Date</th>

                <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: 600, color: '#555' }}>Name</th>

                <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: 600, color: '#555' }}>Patient</th>

                <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: 600, color: '#555' }}>Note</th>

                <th style={{ padding: '12px 8px', textAlign: 'left', fontWeight: 600, color: '#555' }}>Encounter ID</th>

              </tr>

            </thead>

            <tbody>

              <tr>

                <td colSpan={5} style={{ textAlign: 'center', color: '#888', padding: '32px 0' }}></td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}