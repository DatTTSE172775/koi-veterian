import ServiceCTASection from "../../components/customer/service/cta/ServiceCTASection";
import ServiceDetailSection from "../../components/customer/service/detail/ServiceDetailSection";
import ServiceFAQSection from "../../components/customer/service/faq/ServiceFAQSection";
import ServiceHeroSection from "../../components/customer/service/hero/ServiceHeroSection";
import ServiceOverviewSection from "../../components/customer/service/overview/ServiceOverviewSection";
import ServicePackagesSection from "../../components/customer/service/package/ServicePackagesSection";
import ServiceTestimonialsSection from "../../components/customer/service/testimonial/ServiceTestimonialsSection";
import ServiceWhyChooseUsSection from "../../components/customer/service/whyChoose/ServiceWhyChooseUsSection";

const ServicesPage = () => {
  return (
    <div>
      <ServiceHeroSection />
      <ServiceOverviewSection />
      <ServiceDetailSection />
      <ServiceWhyChooseUsSection />
      <ServicePackagesSection />
      <ServiceTestimonialsSection />
      <ServiceFAQSection />
      <ServiceCTASection />
    </div>
  );
};

export default ServicesPage;
