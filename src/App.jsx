import "./App.css";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/index.js";

function App() {
  return (
    <>
      <Button variant="success">button</Button>
      <Menu>
        <Menu.Button variant="danger">Menu</Menu.Button>
        <Menu.Dropdown>
          <Menu.Item>item one</Menu.Item>
          <Menu.Item>item two</Menu.Item>
          <Menu.Item>item three</Menu.Item>
          <Menu.Item>item four</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}

export default App;
