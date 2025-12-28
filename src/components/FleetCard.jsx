import React from "react";

const FleetCard = ({ fleet, onUpdate, onToggle, onDelete }) => {
  return (
    <div className="card">
      <img src="https://thumbs.dreamstime.com/b/independent-white-static-car-white-background-19853523.jpg" alt="vehicle" />
      <p><b>Reg No:</b> {fleet.regNo}</p>
      <p><b>Category:</b> {fleet.category}</p>
      <p><b>Driver:</b> {fleet.driver}</p>
      <p><b>Status:</b> {fleet.status}</p>

      <button onClick={() => onUpdate(fleet.id)}>Update Driver</button>
      <button onClick={() => onToggle(fleet.id)}>Toggle Status</button>
      <button onClick={() => onDelete(fleet.id)}>Delete</button>
    </div>
  );
};

export default React.memo(FleetCard);
