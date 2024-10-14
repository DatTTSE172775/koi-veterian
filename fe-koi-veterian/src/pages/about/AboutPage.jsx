import AboutAchievementsSection from "../../components/customer/about/achievements/AboutAchievementsSection";
import AboutCTASection from "../../components/customer/about/cta/AboutCTASection";
import AboutFAQSection from "../../components/customer/about/faq/AboutFAQSection";
import AboutGallerySection from "../../components/customer/about/gallery/AboutGallerySection";
import AboutHeroSection from "../../components/customer/about/hero/HeroSection";
import AboutHistorySection from "../../components/customer/about/history/AboutHistorySection";
import AboutMissionSection from "../../components/customer/about/mission/AboutMissionSection";
import AboutSummaryServicesSection from "../../components/customer/about/service/AboutSummaryServicesSection";
import AboutTeamSection from "../../components/customer/about/team/AboutTeamSection";
import AboutTestimonialsSection from "../../components/customer/about/testimonials/AboutTestimonialsSection";

const AboutPage = () => {
  return (
    <div>
      <AboutHeroSection />
      <AboutMissionSection />
      <AboutHistorySection />
      <AboutTeamSection />
      <AboutSummaryServicesSection />
      <AboutTestimonialsSection />
      <AboutAchievementsSection />
      <AboutGallerySection />
      <AboutCTASection />
      <AboutFAQSection />
    </div>
  );
};

export default AboutPage;
