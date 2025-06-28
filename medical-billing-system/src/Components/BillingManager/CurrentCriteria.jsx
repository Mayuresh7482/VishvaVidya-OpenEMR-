import React from 'react';

const CurrentCriteria = () => {
  return (
    <div className="criteria-section">
      <div className="criteria-header">Current Criteria</div>
      <div className="criteria-content">
        <div className="criteria-actions">
          <span>Criteria Actions:</span>
          <div className="action-icons">
            <button className="icon-button edit-button">
              <span role="img" aria-label="Edit" className="criteria-icon">📝</span>
            </button>
            <button className="icon-button delete-button">
              <span role="img" aria-label="Delete" className="criteria-icon">🗑️</span>
            </button>
          </div>
        </div>
        <div className="current-criteria-list">
          <div className="criteria-item">
            <span className="criteria-label">Date of Service = Today</span>
          </div>
          <div className="criteria-item">
            <span className="criteria-label">Billing Status = Unbilled</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCriteria;