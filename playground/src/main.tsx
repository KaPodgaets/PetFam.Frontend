import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./contexts/auth/AuthProvider.tsx";
import AppRoutes from "./components/AppRoutes.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <App>
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  </App>
);
