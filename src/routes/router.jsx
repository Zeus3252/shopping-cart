import { BrowserRouter as Router } from "react-router-dom";
import App from "../App";

const RouterConfig = () => {
  return (
    <Router basename="/shopping-cart">
      <App />
    </Router>
  );
};

export default RouterConfig;
