import React from "react";
import { experience } from "../../util/info";

const Experience: React.FC = () => {
  return (
    <div className="experience-container">
      <h2 style={{ position: "sticky", top: "0" }}>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="experience-card">
          <h3 className="experience-title">
            {exp.title}
            <img
              className="company-logo"
              height="30"
              alt="company-logo"
              src={exp.logoSrc}
            />
          </h3>

          <p className="experience-time">{exp.timeperiod}</p>
          <pre className="experience-description">{exp.description}</pre>

          <div className="experience-technologies">
            {exp.technologies.map((tech, idx) => (
              <i key={idx} className="experience-chip">
                {tech}
              </i>
            ))}
          </div>
          <h3 className="discover-more-container">
            <a className="discover-more">Understand better</a>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Experience;
