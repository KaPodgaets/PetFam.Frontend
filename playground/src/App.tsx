import { BrowserRouter } from "react-router";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import AppRoutes from "./components/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </Provider>
    </>
  );
};

export default App;
