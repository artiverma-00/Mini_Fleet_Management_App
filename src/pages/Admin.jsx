import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import FleetCard from '../components/FleetCard';

export default function Admin() {
  const [fleets] = useState([
    { id: 1, name: 'Fleet A', status: 'Active', vehicleCount: 15 },
    { id: 2, name: 'Fleet B', status: 'Active', vehicleCount: 8 },
    { id: 3, name: 'Fleet C', status: 'Inactive', vehicleCount: 5 },
  ]);

  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Sidebar />
        <main className="main-content">
          <h2>Fleet Management</h2>
          <div className="fleet-grid">
            {fleets.map((fleet) => (
              <FleetCard key={fleet.id} fleet={fleet} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
