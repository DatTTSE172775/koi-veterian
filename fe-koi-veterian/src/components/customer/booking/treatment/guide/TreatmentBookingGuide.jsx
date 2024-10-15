import "./TreatmentBookingGuide.scss";

const TreatmentBookingGuide = () => {
  return (
    <div className="treatmentBookingPage-booking-guide">
      <h2>Hướng dẫn quy trình đặt lịch điều trị bệnh cho cá</h2>
      <div className="treatmentBookingPage-steps">
        <div className="treatmentBookingPage-step">
          <h3>Bước 1: Chọn dịch vụ điều trị</h3>
          <p>
            Chọn dịch vụ điều trị bệnh cho cá từ danh sách dịch vụ của trung
            tâm.
          </p>
        </div>
        <div className="treatmentBookingPage-step">
          <h3>Bước 2: Chọn bác sĩ</h3>
          <p>
            Chọn bác sĩ điều trị theo mong muốn của bạn hoặc để trung tâm phân
            công bác sĩ phù hợp.
          </p>
        </div>
        <div className="treatmentBookingPage-step">
          <h3>Bước 3: Xác nhận địa điểm và lịch hẹn</h3>
          <p>
            Xác nhận địa điểm thực hiện (tại nhà hoặc tại trung tâm) và thời
            gian phù hợp.
          </p>
        </div>
        <div className="treatmentBookingPage-step">
          <h3>Bước 4: Điều trị và kê đơn thuốc</h3>
          <p>Bác sĩ sẽ tới điều trị bệnh cho cá và kê đơn thuốc nếu cần.</p>
        </div>
        <div className="treatmentBookingPage-step">
          <h3>Bước 5: Đánh giá và phản hồi</h3>
          <p>
            Sau khi điều trị, bạn có thể đánh giá kết quả và cung cấp phản hồi
            về dịch vụ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TreatmentBookingGuide;
