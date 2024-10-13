import { BrowserRouter as Router } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <CustomerRoutes />
    </Router>
  );
};

export default AppRoutes;
