import React from "react";
import { aboutSection } from "../../util/info";

interface AboutProps {
  // Remove setActiveTab from props
}

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <h2 style={{ position: 'sticky', top: '0' }}>About</h2>
      <div dangerouslySetInnerHTML={{ __html: aboutSection }} />
    </div>
  );
};

export default About;
