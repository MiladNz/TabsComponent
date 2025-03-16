import { useEffect, useState } from "react";
import "./TabsComponent.css";

function TabsComponent({ tabs }) {
  const getCurrentTab = () => {
    return JSON.parse(localStorage.getItem("clickedTab")) || tabs[0];
  };

  const [activeTab, setActiveTab] = useState(getCurrentTab);

  useEffect(() => {
    localStorage.setItem("clickedTab", JSON.stringify(activeTab));
  }, [activeTab]);

  return (
    <div className="container">
      <div className="tabs-container">
        <h1>Tabs Component with React</h1>
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(tab)}
              className={activeTab.title === tab.title ? "active" : ""}>
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="tabs-content">
        <h3>{`Content ${activeTab.title.split(" ")[1]}`}</h3>
        <p>{activeTab.content}</p>
      </div>
    </div>
  );
}

export default TabsComponent;
