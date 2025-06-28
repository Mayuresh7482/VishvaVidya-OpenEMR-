import React from 'react';

const ChooseCriteria = () => {
  const criteriaOptions = [
    'Date of Service',
    'Date of Entry',
    'Date of Billing',
    'Claim Type',
    'Patient Name',
    'Patient Id',
    'Insurance Company',
    'Encounter'
  ];

  return (
    <div className="criteria-section">
      <div className="criteria-header">Choose Criteria</div>
      <div className="criteria-content">
        <div className="select-container">
          <label>Select list:</label>
          <div className="select-wrapper">
            <select className="criteria-select" size={8}>
              {criteriaOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseCriteria;