import React from "react";
import "./TabsStyle.scss";
import { tabs } from "./data";

interface TabProps {
  orientaion: "horizontal" | "vertical";
}

const Tabs: React.FC<TabProps> = ({ orientaion }) => {
  return (
    <div className={`tabs ${orientaion}`}>
      {tabs.map((tab) => (
        <div key={tab.id} className="tab">
          {tab.name}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
