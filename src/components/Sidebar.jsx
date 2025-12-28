import React from 'react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-menu">
        <h2>Menu</h2>
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#vehicles">Vehicles</a></li>
          <li><a href="#drivers">Drivers</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>
    </aside>
  );
}
