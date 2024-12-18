import React, { useEffect, useState } from 'react';
import { getProjects } from '../services/api';

const CandidateDashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await getProjects();
        setProjects(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="container" 
    style={{ 
      width: "100%",        // Makes the image responsive in width
      height: "564px",      // Fixed height of 566px
      objectFit: "contain"  // Ensures the image maintains its aspect ratio
    }}
    >
      <h2>Assigned Projects</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p>Duration: {project.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateDashboard;
