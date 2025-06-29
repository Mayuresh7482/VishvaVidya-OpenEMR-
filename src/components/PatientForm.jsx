import React from "react";
import Accordion from "./Accordion";

const PatientForm = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "40px auto" }}>
      <h2>Search or Add Patient</h2>
      <Accordion title="Who">
        {/* Add form fields for Who */}
        <input type="text" placeholder="Name" style={{ width: "100%", marginBottom: "8px" }} />
        <input type="text" placeholder="DOB" style={{ width: "100%" }} />
      </Accordion>
      <Accordion title="Contact">
        {/* Add form fields for Contact */}
        <input type="text" placeholder="Phone" style={{ width: "100%", marginBottom: "8px" }} />
        <input type="email" placeholder="Email" style={{ width: "100%" }} />
      </Accordion>
      <Accordion title="Choices">
        {/* Add form fields for Choices */}
        <select style={{ width: "100%" }}>
          <option>Option 1</option>
          <option>Option 2</option>
        </select>
      </Accordion>
      <Accordion title="Employer">
        {/* Add form fields for Employer */}
        <input type="text" placeholder="Employer Name" style={{ width: "100%" }} />
      </Accordion>
      <Accordion title="Stats">
        {/* Add form fields for Stats */}
        <input type="text" placeholder="Height" style={{ width: "100%", marginBottom: "8px" }} />
        <input type="text" placeholder="Weight" style={{ width: "100%" }} />
      </Accordion>
      <Accordion title="Misc">
        {/* Add form fields for Misc */}
        <textarea placeholder="Notes" style={{ width: "100%" }} />
      </Accordion>
      <Accordion title="Guardian">
        {/* Add form fields for Guardian */}
        <input type="text" placeholder="Guardian Name" style={{ width: "100%" }} />
      </Accordion>
      <Accordion title="Insurance">
        {/* Add form fields for Insurance */}
        <input type="text" placeholder="Insurance Provider" style={{ width: "100%" }} />
      </Accordion>
      <div style={{ marginTop: "20px" }}>
        <button style={{ padding: "10px 20px", background: "#007bff", color: "#fff", border: "none" }}>
          Create New Patient
        </button>
      </div>
    </div>
  );
};

export default PatientForm;
