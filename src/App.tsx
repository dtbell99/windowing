import "./App.css";
import ActionBar from "./components/ActionBar";
import Content from "./components/Content";
import Menu from "./components/Menu";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Menu />
      <Content />
      <ActionBar />
    </div>
  );
}

export default App;
