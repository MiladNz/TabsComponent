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
      content: "Here is what you see in Tab 2",
    },
    { title: "TAB 3", content: "Tab 3 holds its own unique content" },
    {
      title: "TAB 4",
      content: "Finally, this is the content for Tab 4",
    },
  ];

  const getCurrentTab = () => {
    return localStorage.getItem("clickedTab") || tabs[0].title;
  };

  const getCurrentTabContent = () => {
    return tabs.find((tab) => tab.title === activeTab);
  };

  const [activeTab, setActiveTab] = useState(getCurrentTab);

  useEffect(() => {
    localStorage.setItem("clickedTab", activeTab);
  }, [activeTab]);

  return (
    <div>
      <h1>Tabs Component with React</h1>
      <div className="tab-container">
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        <h3>{`Content ${tabs.indexOf(activeTab) + 1}`}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          illum dolores alias quo fugit vero incidunt quaerat praesentium
          temporibus qui corporis eum explicabo ipsa aspernatur officia,
          dignissimos eligendi eos nemo!
        </p>
      </div>
    </div>
  );
}

export default App;
