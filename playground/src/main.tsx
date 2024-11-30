import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import TicTacToe from "./pages/TicTacToe.tsx";
import About from "./pages/About.tsx";
import GameFromTutorialPage from "./pages/GameFromTutorialPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="game" element={<TicTacToe />} />
        <Route path="game-from-tutorial" element={<GameFromTutorialPage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
