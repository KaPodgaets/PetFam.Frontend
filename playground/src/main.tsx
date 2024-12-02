import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import ProfilePage from "./pages/Profile/ProfilePage.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import VolunteersPage from "./pages/Volunteers/VolunteersPage.tsx";
import HelpAnimalsPage from "./pages/Help-animals/HelpAnimalsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="volunteers" element={<VolunteersPage />} />
        <Route path="help-animals" element={<HelpAnimalsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
