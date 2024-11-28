import { Outlet } from "react-router";
import "./MainLayout.css";
import Header from "../components/Header/Header";
import ContentBlock from "../components/ContentBlock";

function MainLayout() {
  return (
    <div className="h-screen flex flex-col sm:px-4">
      <Header />
      <div className="flex flex-col h-full px-4 sm:px-2 py-4 sm:py-2">
        <ContentBlock>
          <Outlet />
        </ContentBlock>
      </div>
    </div>
  );
}

export default MainLayout;
