import { Outlet } from "react-router";
import "./MainLayout.css";
import Header from "../components/Header/Header";
import ContentBlock from "../components/ContentBlock";
import Footer from "../components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";
import { apiRequest } from "../services/apiRequest";
import { useAuth } from "../contexts/auth/useAuth";

function MainLayout() {
  const { accessToken } = useAuth();

  apiRequest.interceptors.request.use((config) => {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  });

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
