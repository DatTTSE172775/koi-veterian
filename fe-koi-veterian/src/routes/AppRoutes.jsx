import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import CustomerRoutes from "./CustomerRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <AuthRoutes />
      <CustomerRoutes />
    </Router>
  );
};

export default AppRoutes;
