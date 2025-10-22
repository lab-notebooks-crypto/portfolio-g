import React from 'react';

const University = ({ university }) => {
  return (
    <div className="section">
      <h3>Education</h3>
      <p>{university}</p>
    </div>
  );
};

export default University;