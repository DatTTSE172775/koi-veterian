import { Button } from "antd";
import "./CallToActionSection.scss";

const CallToActionSection = () => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <h2>Đặt lịch hẹn ngay để chăm sóc cá Koi của bạn</h2>
        <p>
          Chúng tôi sẵn sàng hỗ trợ chăm sóc sức khỏe tốt nhất cho cá Koi của
          bạn. Đừng chần chừ, hãy đặt lịch ngay hôm nay!
        </p>
        <Button type="primary" size="large" className="cta-button">
          Đặt lịch hẹn ngay
        </Button>
      </div>
    </div>
  );
};

export default CallToActionSection;
