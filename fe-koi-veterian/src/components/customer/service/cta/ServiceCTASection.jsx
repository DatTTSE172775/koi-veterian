import { Button } from "antd";
import "./ServiceCTASection.scss";

const ServiceCTASection = () => {
  return (
    <div className="servicePage-cta-section">
      <div className="servicePage-cta-content">
        <h2>Đặt lịch hẹn hoặc liên hệ ngay hôm nay</h2>
        <p>
          Chúng tôi sẵn sàng hỗ trợ và tư vấn các dịch vụ chăm sóc cá Koi tốt
          nhất cho bạn.
        </p>
        <Button type="primary" size="large" className="servicePage-cta-button">
          Đặt lịch ngay
        </Button>
      </div>
    </div>
  );
};

export default ServiceCTASection;
