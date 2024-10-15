import { Route, Routes } from "react-router-dom";
import CustomerLayout from "../layouts/CustomerLayout";
import AboutPage from "../pages/about/AboutPage";
import BookingPage from "../pages/booking/BookingPage";
import HomeBookingPage from "../pages/booking/HomeBookingPage";
import OnlineBookingPage from "../pages/booking/OnlineBookingPage";
import TreatmentBookingPage from "../pages/booking/TreatmentBookingPage";
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
        <Route
          path="/services/online-consultation"
          element={<OnlineBookingPage />}
        />
        <Route
          path="/services/home-consultation"
          element={<HomeBookingPage />}
        />
        <Route
          path="/services/disease-treatment"
          element={<TreatmentBookingPage />}
        />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/veterianOverview" element={<VeterianPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Route>
    </Routes>
  );
};

export default CustomerRoutes;
