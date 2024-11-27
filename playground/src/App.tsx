import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
