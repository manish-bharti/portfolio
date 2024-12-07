import React from "react";

interface EducationProps {
  // Remove setActiveTab from props
}

const Education: React.FC<EducationProps> = () => {
  return (
    <div>
      <h2 style={{ position: 'sticky', top: '0' }}>Education</h2>
      <div>
        <h3>Dr B R Ambedkar National Institute of Technology, Jalandhar</h3>
        <p>Bachelor of Technology in Information Technology</p>
        <p>2018 - 2022</p>
        <p>Grade Point : 7.45</p>
      </div>
    </div>
  );
};

export default Education;
