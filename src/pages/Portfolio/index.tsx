import React, { useState, useEffect } from "react";
import "./PortfolioStyle.scss";
import { personnelInfo } from "../../util/info";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Education from "./Education"; // Import the Education component
import { FaArrowCircleRight } from "react-icons/fa"; // Import the icon
import Carousel from "../../components/Carousel"; // Import the Carousel component

const Portfolio: React.FC = () => {
  return (
    <>
      <div className="layout-container">
        <div className="left-side">
          <h1>{personnelInfo.title}</h1>
          <h3>{personnelInfo.subTitle}</h3>
          <div className="work-links-container">
            <a href="AI">
              Explore my expertise in <b>Artificial Intelligence</b>
              <FaArrowCircleRight />
            </a>
            <a href="#FULLSTACK">
              Discover my work in <b>Full Stack Development</b>
              <FaArrowCircleRight />
            </a>
          </div>
          <Carousel /> {/* Add Carousel component */}
          <SocialMediaLinks />
        </div>

        <div className="right-side">
          <About />
          <Education />
          <Experience />
          <Project />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
