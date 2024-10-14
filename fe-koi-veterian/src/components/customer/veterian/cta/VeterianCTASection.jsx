import { Button } from "antd";
import "./VeterianCTASection.scss";

const VeterianCTASection = () => {
  return (
    <div className="veterianPage-cta-section">
      <div className="veterianPage-cta-content">
        <h2>Đặt lịch hẹn với bác sĩ ngay hôm nay</h2>
        <p>
          Chúng tôi sẵn sàng tư vấn và chăm sóc sức khỏe cho cá Koi của bạn với
          dịch vụ chuyên nghiệp từ đội ngũ bác sĩ giàu kinh nghiệm.
        </p>
        <Button type="primary" size="large" className="veterianPage-cta-button">
          Đặt lịch hẹn
        </Button>
      </div>
    </div>
  );
};

export default VeterianCTASection;
