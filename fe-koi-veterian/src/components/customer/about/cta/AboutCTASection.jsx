import { Button } from "antd";
import "./AboutCTASection.scss";

const AboutCTASection = () => {
  return (
    <div className="aboutPage-cta-section">
      <div className="aboutPage-cta-content">
        <h2>Liên hệ với chúng tôi ngay hôm nay</h2>
        <p>
          Chúng tôi luôn sẵn sàng hỗ trợ bạn với các dịch vụ chăm sóc và điều
          trị cá Koi tốt nhất. Hãy liên hệ để được tư vấn và đặt lịch hẹn ngay.
        </p>
        <Button type="primary" size="large" className="aboutPage-cta-button">
          Liên hệ chúng tôi
        </Button>
      </div>
    </div>
  );
};

export default AboutCTASection;
