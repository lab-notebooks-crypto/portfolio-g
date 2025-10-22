import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="section">
      <h3>Featured Project</h3>
      <p>{project}</p>
    </div>
  );
};

export default Project;