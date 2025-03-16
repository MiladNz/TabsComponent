import TabsComponent from "./TabsComponent";

function App() {
  const tabs = [
    {
      title: "Tab 1",
      content: "This is the content for Tab 1 ✨ ",
    },
    {
      title: "Tab 2",
      content: "This is the content for Tab 2 😍",
    },
    { title: "Tab 3", content: "This is the content for Tab 3 ⭐" },
    {
      title: "Tab 4",
      content: "This is the content for Tab 4 👌",
    },
  ];

  return (
    <div>
      <TabsComponent tabs={tabs} />
    </div>
  );
}

export default App;
