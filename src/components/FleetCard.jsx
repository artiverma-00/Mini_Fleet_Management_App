import React from 'react';

export default function FleetCard({ fleet }) {
  return (
    <div className="fleet-card">
      <h3>{fleet.name}</h3>
      <p>Status: {fleet.status}</p>
      <p>Vehicles: {fleet.vehicleCount}</p>
    </div>
  );
}
