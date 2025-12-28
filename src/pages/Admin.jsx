import { useCallback, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";

const Admin = () => {
  const [fleets, setFleets] = useState([]);

  const addFleet = (fleet) => {
    setFleets((prev) => [...prev, fleet]);
  };

  const updateDriver = useCallback((id) => {
    const name = prompt("Enter new driver name");
    if (!name || !name.trim()) return;

    setFleets((prev) =>
      prev.map((f) => (f.id === id ? { ...f, driver: name } : f))
    );
  }, []);

  const toggleAvailability = useCallback((id) => {
    setFleets((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              status: f.status === "Available" ? "Unavailable" : "Available",
            }
          : f
      )
    );
  }, []);

  const deleteFleet = useCallback((id) => {
    if (confirm("Are you sure?")) {
      setFleets((prev) => prev.filter((f) => f.id !== id));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar addFleet={addFleet} />
        <div className="grid">
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              fleet={fleet}
              onUpdate={updateDriver}
              onToggle={toggleAvailability}
              onDelete={deleteFleet}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Admin;
