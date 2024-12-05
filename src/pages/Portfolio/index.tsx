import React, { useState } from "react";
import "./PortfolioStyle.scss";
import { personnelInfo } from "../../util/info";
import Tabs from "../../components/Tabs";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import { FaArrowCircleRight } from "react-icons/fa"; // Import the icon

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("");
  console.log(activeTab);
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
          <Tabs orientaion="vertical" currentTab={activeTab} />
          <SocialMediaLinks />
        </div>

        <div className="right-side">
          <About setActiveTab={setActiveTab} />
          <Experience setActiveTab={setActiveTab} />
          <Project setActiveTab={setActiveTab} />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
