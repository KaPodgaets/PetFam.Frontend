import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayout from "./layouts/MainLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import TicTacToe from "./pages/GamePage/TicTacToe.tsx";
import About from "./pages/About.tsx";
import GameFromTutorialPage from "./pages/GameFromTutorialPage.tsx";
import HomePage from "./pages/Index/HomePage.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="game" element={<TicTacToe />} />
        <Route path="game-from-tutorial" element={<GameFromTutorialPage />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
