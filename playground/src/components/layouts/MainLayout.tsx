import { Outlet } from "react-router";
import "./MainLayout.css";
import Header from "../Header/Header";
import ContentBlock from "../ContentBlock";
import Footer from "../Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

function MainLayout() {
  return (
    <div className="h-screen flex flex-col sm:px-4">
      <Header />
      <div className="flex flex-col h-full px-4 sm:px-2 py-4 sm:py-2">
        <div>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
        <ContentBlock>
          <Outlet />
        </ContentBlock>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
