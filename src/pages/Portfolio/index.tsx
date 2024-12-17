import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // Import Link from react-router
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
            <Link to="/portfolio/expertise?tab=aiMl">
              Explore my expertise in <b>Artificial Intelligence</b>
              <FaArrowCircleRight />
            </Link>
            <Link to="/portfolio/expertise?tab=fullStack">
              Discover my work in <b>Full Stack Development</b>
              <FaArrowCircleRight />
            </Link>
          </div>
          <Carousel /> {/* Add Carousel component */}
          <SocialMediaLinks />
        </div>

        <div className="right-side">
          <About />
          <Education />
          <Experience />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
