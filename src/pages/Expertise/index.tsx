import React, { useState, useEffect } from "react";
import { metaData, tabs } from "./ExpertiseMeta";
import "./Expertise.scss";
import { FaBrain, FaCode, FaList } from "react-icons/fa";
import Card from "../../components/Card";

const Expertise: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab && tabs[tab as keyof typeof tabs]) {
      setActiveTab(tab);
    }
  }, []);

  const tabIcons: { [key: string]: JSX.Element } = {
    all: <FaList />,
    aiMl: <FaBrain />,
    fullStack: <FaCode />,
  };

  const filteredCards = metaData.cards
    .filter(
      (card) =>
        activeTab === "all" || card.tag === tabs[activeTab as keyof typeof tabs]
    )
    .sort((a, b) => a.priority - b.priority);

  return (
    <div>
      <div className="tabs">
        {Object.keys(tabs).map((key) => (
          <div
            className={`tab ${activeTab === key ? "active" : ""}`}
            key={key}
            onClick={() => setActiveTab(key)}
          >
            {tabIcons[key as keyof typeof tabIcons]}
            {tabs[key as keyof typeof tabs]}
          </div>
        ))}
      </div>
      <div className="cards">
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            thumbnail={card.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
