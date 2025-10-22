import React from 'react';

const About = ({ about }) => {
  return (
    <div className="section">
      <h3>About Me</h3>
      <p>{about}</p>
    </div>
  );
};

export default About;