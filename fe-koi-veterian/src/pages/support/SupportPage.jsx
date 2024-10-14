import SupportCTASection from "../../components/customer/support/cta/SupportCTASection";
import FAQSection from "../../components/customer/support/faq/FAQSection";
import ContactFormSection from "../../components/customer/support/form/ContactFormSection";
import SupportHeroSection from "../../components/customer/support/hero/SupportHeroSection";
import HomeInspectionBookingGuide from "../../components/customer/support/homeBook/HomeInspectionBookingGuide";
import OnlineConsultationBookingGuide from "../../components/customer/support/onlineBook/OnlineConsultationBookingGuide";
import TreatmentServiceBookingGuide from "../../components/customer/support/treatmentBook/TreatmentServiceBookingGuide";

const SupportPage = () => {
  return (
    <div style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <SupportHeroSection />
      <OnlineConsultationBookingGuide />
      <HomeInspectionBookingGuide />
      <TreatmentServiceBookingGuide />
      <FAQSection />
      <ContactFormSection />
      <SupportCTASection />
    </div>
  );
};

export default SupportPage;
