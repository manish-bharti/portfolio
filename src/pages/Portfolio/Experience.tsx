import React from 'react';
import { longText } from '../../util/info';

interface ExperienceProps {
  // Remove setActiveTab from props
}

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <div>
      <h2 style={{ position: 'sticky', top: '0' }}>Experience Title</h2>
      <p>Experience Description</p>
      <a href="#" target="_blank" rel="noopener noreferrer">View Experience</a>
      <p>{longText}</p>
    </div>
  );
};

export default Experience;
