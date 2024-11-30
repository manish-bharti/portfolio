import React, { useEffect } from 'react';
import { longText } from '../../util/info';
import useOnScreen from '../../hooks/useOnScreen';

interface ExperienceProps {
  setActiveTab: (tab: string) => void;
}

const Experience: React.FC<ExperienceProps> = ({ setActiveTab }) => {
  const [ref, isIntersecting] = useOnScreen({ rootMargin: '0px 0px -50% 0px' });

  useEffect(() => {
    if (isIntersecting) {
      setActiveTab('Experience');
    }
  }, [isIntersecting, setActiveTab]);

  return (
    <div ref={ref}>
      <h2>Experience Title</h2>
      <p>Experience Description</p>
      <a href="#" target="_blank" rel="noopener noreferrer">View Experience</a>
      <p>{longText}</p>
    </div>
  );
};

export default Experience;
