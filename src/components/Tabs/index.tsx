import React from "react";
import "./TabsStyle.scss";
import { tabs } from "./data";

interface TabProps {
  orientaion: "horizontal" | "vertical";
  currentTab: string;
}

const Tabs: React.FC<TabProps> = ({ orientaion, currentTab }) => {
  return (
    <div className={`tabs ${orientaion}`}>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab ${currentTab === tab.id ? "current" : ""}`}
        >
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
