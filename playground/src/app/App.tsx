import { BrowserRouter } from "react-router";
import AppRoutes from "../components/AppRoutes";
import { Provider } from "react-redux";
import { store } from "../shared/store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
