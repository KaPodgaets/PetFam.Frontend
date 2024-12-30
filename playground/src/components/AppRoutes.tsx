// AppRoutes.tsx
import React from "react";
import MainLayout from "../layouts/MainLayout"; // Adjust the import path as needed
import HelpAnimalsPage from "../pages/Help-animals/HelpAnimalsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import VolunteersPage from "../pages/Volunteers/VolunteersPage";
import LoginPage from "../pages/Login/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import HomePage from "../pages/Home/HomePage";
import { Route, Routes } from "react-router";
const AppRoutes: React.FC = () => {
  return (
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
  );
};

export default AppRoutes;
