import { Button } from "antd";
import "./TreatmentBookingCTA.scss";

const TreatmentBookingCTA = () => {
  return (
    <div className="treatmentBookingPage-cta-section">
      <div className="treatmentBookingPage-cta-content">
        <h2>Đặt lịch điều trị bệnh cho cá ngay</h2>
        <p>
          Nhấn vào nút dưới đây để đặt lịch dịch vụ điều trị bệnh cho cá tại nhà
          hoặc tại trung tâm ngay lập tức.
        </p>
        <Button
          type="primary"
          size="large"
          className="treatmentBookingPage-cta-button"
        >
          Đặt lịch điều trị bệnh
        </Button>
      </div>
    </div>
  );
};

export default TreatmentBookingCTA;
