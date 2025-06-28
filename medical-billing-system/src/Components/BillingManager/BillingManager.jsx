import React from 'react';
import './BillingManager.css';
import ChooseCriteria from './ChooseCriteria';
import CurrentCriteria from './CurrentCriteria';
import SelectAction from './SelectAction';

const BillingManager = () => {
  return (
    <div className="billing-manager">
      <div className="billing-header">
        <h2>Billing Manager</h2>
        <button className="refresh-button">⟳</button>
      </div>
      
      <div className="billing-content">
        <ChooseCriteria />
        <CurrentCriteria />
        <SelectAction />
      </div>

      <div className="billing-footer">
        <div className="footer-options">
          <div className="option-group">
            <button className="dropdown-button">X12 OPTIONS ▼</button>
          </div>
          <div className="option-group">
            <button className="dropdown-button">HCFA FORM ▼</button>
          </div>
          <div className="option-group">
            <button className="action-button">
              <span className="icon">✓</span>
              Mark as Cleared
            </button>
          </div>
          <div className="option-group">
            <button className="action-button">
              <span className="icon">↺</span>
              Re-Open
            </button>
          </div>
          <div className="option-group">
            <span className="label">CMS Margins Left:</span>
            <input type="text" className="margin-input" defaultValue="24" />
            <span className="label">Top:</span>
            <input type="text" className="margin-input" defaultValue="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingManager;