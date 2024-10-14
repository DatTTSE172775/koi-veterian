import { Route, Routes } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import AboutPage from "../pages/about/AboutPage";
import HomePage from "../pages/home/HomePages";
import ServicesPage from "../pages/service/ServicePage";
import SupportPage from "../pages/support/SupportPage";
import VeterianPage from "../pages/veterianPage/VeterianPage";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route element={<CustomerLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/veterianOverview" element={<VeterianPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
};

export default CustomerRoutes;
