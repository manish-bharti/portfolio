import React from 'react';
import { longText } from '../../util/info';

interface ProjectProps {
  // Remove setActiveTab from props
}

const Project: React.FC<ProjectProps> = () => {
  return (
    <div>
      <h2 style={{ position: 'sticky', top: '0' }}>Project Title</h2>
      <p>Project Description</p>
      <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
      <p>{longText}</p>
    </div>
  );
};

export default Project;
