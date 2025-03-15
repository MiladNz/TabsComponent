import TabsComponent from "./TabsComponent";

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

  return (
    <div>
      <TabsComponent tabs={tabs} />
    </div>
  );
}

export default App;
