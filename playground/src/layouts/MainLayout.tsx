import { Outlet } from "react-router";
import "./MainLayout.css";
import Header from "../components/Header/Header";

function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default MainLayout;
