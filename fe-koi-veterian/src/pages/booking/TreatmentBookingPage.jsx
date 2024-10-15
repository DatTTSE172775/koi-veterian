import TreatmentBookingCTA from "../../components/customer/booking/treatment/cta/TreatmentBookingCTA";
import TreatmentBookingFAQ from "../../components/customer/booking/treatment/faq/TreatmentBookingFAQ";
import TreatmentBookingGuide from "../../components/customer/booking/treatment/guide/TreatmentBookingGuide";
import TreatmentBookingServiceOverview from "../../components/customer/booking/treatment/overview/TreatmentBookingServiceOverview";
import TreatmentBookingTestimonials from "../../components/customer/booking/treatment/testimonial/TreatmentBookingTestimonials";

const TreatmentBookingPage = () => {
  return (
    <div>
      <TreatmentBookingCTA />
      <TreatmentBookingServiceOverview />
      <TreatmentBookingGuide />
      <TreatmentBookingTestimonials />
      <TreatmentBookingFAQ />
    </div>
  );
};

export default TreatmentBookingPage;
