import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import TicTacToe from "./pages/Game/TicTacToe.tsx";
import HomePage from "./pages/Home/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import VolunteersPage from "./pages/Volunteers/VolunteersPage.tsx";
import LoginPage from "./pages/Registration/RegistrationPage.tsx";
import RegistrationPage from "./pages/Registration/RegistrationPage.tsx";
import ProfilePage from "./pages/Profile/ProfilePage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="game" element={<TicTacToe />} />
        <Route path="volunteers" element={<VolunteersPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
