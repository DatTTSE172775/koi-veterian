import AboutUsSection from "../../components/home/aboutUs/AboutUsSection";
import ContactSection from "../../components/home/contact/ContactSection";
import CallToActionSection from "../../components/home/cta/CallToActionSection";
import FAQSection from "../../components/home/faq/FAQSection";
import HeroSection from "../../components/home/hero/HeroSection";
import NewsSection from "../../components/home/news/NewsSection";
import ServicesSection from "../../components/home/serviceSection/ServiceSection";
import TestimonialsSection from "../../components/home/testimonialsSection/TestimonialsSection";
import VeterinarianTeamSection from "../../components/home/veterinarianTeam/VeterinarianTeamSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <VeterinarianTeamSection />
      <TestimonialsSection />
      <FAQSection />
      <NewsSection />
      <ContactSection />
      <CallToActionSection />
    </div>
  );
};

export default HomePage;
