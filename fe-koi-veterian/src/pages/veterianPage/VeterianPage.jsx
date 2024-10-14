import VeterianCTASection from "../../components/customer/veterian/cta/VeterianCTASection";
import VeterianHeroSection from "../../components/customer/veterian/hero/VeterianHeroSection";
import VeterianDoctorProfilesSection from "../../components/customer/veterian/profile/VeterianDoctorProfilesSection";
import VeterianDoctorScheduleSection from "../../components/customer/veterian/schedule/VeterianDoctorScheduleSection";

const VeterianPage = () => {
  return (
    <div>
      <VeterianHeroSection />
      <VeterianDoctorProfilesSection />
      <VeterianDoctorScheduleSection />
      <VeterianCTASection />
    </div>
  );
};

export default VeterianPage;
