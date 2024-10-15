import { Button } from "antd";
import "./OnlineConsultationHomeInspectionCTA.scss";

const OnlineConsultationHomeInspectionCTA = () => {
  return (
    <div className="onlineBookingPage-cta-section">
      <div className="onlineBookingPage-cta-content">
        <h2>Đặt lịch điều trị bệnh cho cá ngay</h2>
        <p>
          Nhấn vào nút dưới đây để đặt lịch dịch vụ điều trị bệnh cho cá tại nhà
          hoặc tại trung tâm ngay lập tức.
        </p>
        <Button
          type="primary"
          size="large"
          className="onlineBookingPage-cta-button"
        >
          Đặt lịch điều trị bệnh
        </Button>
      </div>
    </div>
  );
};

export default OnlineConsultationHomeInspectionCTA;
