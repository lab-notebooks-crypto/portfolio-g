import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="section">
      <h3>Skills</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;