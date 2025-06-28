import React from 'react';

const SelectAction = () => {
  return (
    <div className="criteria-section">
      <div className="criteria-header">Select Action</div>
      <div className="criteria-content">
        <div className="action-item">
          <button className="action-btn update-list">
            Update List
            <span className="info-icon">ℹ️</span>
          </button>
        </div>
        
        <div className="action-item">
          <button className="action-btn view-report">
            View Printable Report
          </button>
        </div>
        
        <div className="action-item">
          <div className="checkbox-container">
            <input type="checkbox" id="end-of-day" />
            <label htmlFor="end-of-day">End Of Day Report - Totals</label>
          </div>
        </div>
        
        <div className="action-item">
          <button className="action-btn view-log">
            View Log
          </button>
        </div>
        
        <div className="action-item">
          <button className="action-btn tab-log">
            Tab Log
          </button>
        </div>
        
        <div className="action-item">
          <button className="action-btn select-all">
            Select All
          </button>
        </div>
        
        <div className="action-item">
          <button className="action-btn clear-log">
            Clear Log
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectAction;