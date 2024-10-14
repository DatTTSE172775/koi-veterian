import { Route, Routes } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import AboutPage from "../pages/about/AboutPage";
import ContactPage from "../pages/contact/ContactPage";
import HomePage from "../pages/home/HomePages";
import ServicesPage from "../pages/service/ServicePage";
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
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default CustomerRoutes;
