import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const tabs = [
    {
      title: "TAB 1",
      content: "This is the content for Tab 1",
    },
    {
      title: "TAB 2",
      content: "This is the content for Tab 2",
    },
    { title: "TAB 3", content: "This is the content for Tab 3" },
    {
      title: "TAB 4",
      content: "This is the content for Tab 4",
    },
  ];

  const getCurrentTab = () => {
    // return localStorage.getItem("clickedTab") || tabs[0].title;
    return localStorage.getItem("clickedTab")
      ? JSON.parse(localStorage.getItem("clickedTab"))
      : tabs[0];
  };

  // const getCurrentTabContent = () => {
  //   return tabs.find((tab) => tab.title === activeTab);
  // };

  const [activeTab, setActiveTab] = useState(getCurrentTab);

  useEffect(() => {
    localStorage.setItem("clickedTab", JSON.stringify(activeTab));
  }, [activeTab]);

  return (
    <div>
      <h1>Tabs Component with React</h1>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <button key={tab.title} onClick={() => setActiveTab(tab.title)}>
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <h3>{`Content ${activeTab[4]}`}</h3>
        <p>{activeTab.content}</p>
      </div>
    </div>
  );
}

export default App;
