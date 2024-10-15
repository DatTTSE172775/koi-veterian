import OnlineConsultationCTASection from "../../components/customer/booking/online/cta/OnlineConsultationCTASection";
import OnlineConsultationFAQ from "../../components/customer/booking/online/faq/OnlineConsultationFAQ";
import OnlineConsultationBookingGuide from "../../components/customer/booking/online/guide/OnlineConsultationBookingGuide";
import OnlineConsultationServiceOverview from "../../components/customer/booking/online/overview/OnlineConsultationServiceOverview";
import OnlineConsultationTestimonials from "../../components/customer/booking/online/testimonial/OnlineConsultationTestimonials";

const OnlineBookingPage = () => {
  return (
    <div>
      <OnlineConsultationCTASection />
      <OnlineConsultationServiceOverview />
      <OnlineConsultationBookingGuide />
      <OnlineConsultationTestimonials />
      <OnlineConsultationFAQ />
    </div>
  );
};

export default OnlineBookingPage;
