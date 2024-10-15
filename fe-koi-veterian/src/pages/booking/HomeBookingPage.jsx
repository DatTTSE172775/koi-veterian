import OnlineConsultationHomeInspectionCTA from "../../components/customer/booking/home/cta/OnlineConsultationHomeInspectionCTA";
import OnlineConsultationFAQ from "../../components/customer/booking/home/faq/OnlineConsultationFAQ";
import OnlineConsultationBookingGuide from "../../components/customer/booking/home/guide/OnlineConsultationBookingGuide";
import OnlineConsultationServiceOverview from "../../components/customer/booking/home/overview/OnlineConsultationServiceOverview";
import OnlineConsultationTestimonials from "../../components/customer/booking/home/testimonial/OnlineConsultationTestimonials";

const HomeBookingPage = () => {
  return (
    <div>
      <OnlineConsultationHomeInspectionCTA />
      <OnlineConsultationServiceOverview />
      <OnlineConsultationBookingGuide />
      <OnlineConsultationTestimonials />
      <OnlineConsultationFAQ />
    </div>
  );
};

export default HomeBookingPage;
