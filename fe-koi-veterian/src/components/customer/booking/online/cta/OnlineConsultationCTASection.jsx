import { Button } from "antd";
import { Link } from "react-router-dom";
import "./OnlineConsultationCTASection.scss";

const OnlineConsultationCTASection = () => {
  return (
    <div className="onlineBookingPage-cta-section">
      <div className="onlineBookingPage-cta-content">
        <h2>Đặt lịch tư vấn trực tuyến ngay</h2>
        <p>
          Nhấn vào nút dưới đây để đặt lịch tư vấn trực tuyến với bác sĩ chuyên
          gia của chúng tôi ngay lập tức.
        </p>
        <Button
          type="primary"
          size="large"
          className="onlineBookingPage-cta-button"
        >
          <Link to="/booking">Đặt lịch ngay</Link>
        </Button>
      </div>
    </div>
  );
};

export default OnlineConsultationCTASection;
