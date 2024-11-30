import React, { useEffect } from 'react';
import { longText } from '../../util/info';
import useOnScreen from '../../hooks/useOnScreen';

interface AboutProps {
  setActiveTab: (tab: string) => void;
}

const About: React.FC<AboutProps> = ({ setActiveTab }) => {
  const [ref, isIntersecting] = useOnScreen({ rootMargin: '0px 0px -50% 0px' });

  useEffect(() => {
    if (isIntersecting) {
      setActiveTab('About');
    }
  }, [isIntersecting, setActiveTab]);

  return (
    <div ref={ref}>
      <h2>About Title</h2>
      <p>About Description</p>
      <a href="#" target="_blank" rel="noopener noreferrer">View About</a>
      <p>{longText}</p>
    </div>
  );
};

export default About;
