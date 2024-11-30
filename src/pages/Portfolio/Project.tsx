import React, { useEffect } from 'react';
import { longText } from '../../util/info';
import useOnScreen from '../../hooks/useOnScreen';

interface ProjectProps {
  setActiveTab: (tab: string) => void;
}

const Project: React.FC<ProjectProps> = ({ setActiveTab }) => {
  const [ref, isIntersecting] = useOnScreen({ rootMargin: '0px 0px -50% 0px' });

  useEffect(() => {
    if (isIntersecting) {
      setActiveTab('Project');
    }
  }, [isIntersecting, setActiveTab]);

  return (
    <div ref={ref}>
      <h2>Project Title</h2>
      <p>Project Description</p>
      <a href="#" target="_blank" rel="noopener noreferrer">View Project</a>
      <p>{longText}</p>
    </div>
  );
};

export default Project;
