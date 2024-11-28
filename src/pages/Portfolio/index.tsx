import React from "react";
import "./PortfolioStyle.scss";
import { personnelInfo } from "../../util/info";
import Tabs from "../../components/Tabs";
import SocialMediaLinks from "../../components/SocialMediaLinks";
// import useOnScreen from "../../hooks/useOnScreen";

const Portfolio = () => {
  //   const [leftRef, isLeftVisible] = useOnScreen({
  //     threshold: 1,
  //   });
  //   const [rightRef, isRightVisible] = useOnScreen({
  //     threshold: 0.2,
  //   });

  return (
    <>
      {/* <div className="check">paras</div> */}
      <div className="layout-container">
        <div className="left-side">
          <h1>{personnelInfo.title}</h1>
          <h3>{personnelInfo.subTitle}</h3>
          <p>{personnelInfo.introLine}</p>
          <Tabs orientaion="vertical" />
          <SocialMediaLinks />
        </div>

        <div className="right-side"></div>
      </div>
    </>
  );
};

export default Portfolio;
