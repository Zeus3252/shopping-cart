import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";
import { AppProvider } from "../context/AppContext";

const RouterConfig = () => {
  return (
    <Router basename="/shopping-cart">
      <AppProvider>
        <App />
      </AppProvider>
    </Router>
  );
};

export default RouterConfig;
