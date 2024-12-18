import React, { useState } from 'react';
import { assignProject } from '../services/api';

const AdminDashboard = () => {
  const [assignment, setAssignment] = useState({ userId: '', projectId: '' });

  const handleAssign = async (e) => {
    e.preventDefault();
    try {
      await assignProject(assignment);
      alert('Project assigned successfully');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleAssign}
      style={{ 
        width: "100%",        // Makes the image responsive in width
        height: "518px",      // Fixed height of 566px
        objectFit: "contain"  // Ensures the image maintains its aspect ratio
      }}
      >
        <input type="text" placeholder="User ID" required value={assignment.userId} onChange={(e) => setAssignment({ ...assignment, userId: e.target.value })} />
        <input type="text" placeholder="Project ID" required value={assignment.projectId} onChange={(e) => setAssignment({ ...assignment, projectId: e.target.value })} />
        <button type="submit">Assign Project</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
