import "./OnlineConsultationBookingGuide.scss";

const OnlineConsultationBookingGuide = () => {
  return (
    <div className="onlineBookingPage-booking-guide">
      <h2>Hướng dẫn quy trình đặt dịch vụ điều trị bệnh cho cá</h2>
      <div className="onlineBookingPage-steps">
        <div className="onlineBookingPage-step">
          <h3>Bước 1: Chọn dịch vụ điều trị</h3>
          <p>
            Chọn dịch vụ điều trị bệnh cho cá từ danh sách các dịch vụ của trung
            tâm.
          </p>
        </div>
        <div className="onlineBookingPage-step">
          <h3>Bước 2: Chọn bác sĩ</h3>
          <p>
            Chọn bác sĩ điều trị theo mong muốn của bạn hoặc để trung tâm phân
            công bác sĩ phù hợp.
          </p>
        </div>
        <div className="onlineBookingPage-step">
          <h3>Bước 3: Xác nhận địa điểm và lịch hẹn</h3>
          <p>
            Xác nhận địa điểm (tại nhà hoặc tại trung tâm) và lịch hẹn phù hợp.
          </p>
        </div>
        <div className="onlineBookingPage-step">
          <h3>Bước 4: Điều trị và kê đơn thuốc</h3>
          <p>Bác sĩ sẽ tới điều trị bệnh cho cá và kê đơn thuốc nếu cần.</p>
        </div>
        <div className="onlineBookingPage-step">
          <h3>Bước 5: Đánh giá dịch vụ</h3>
          <p>
            Sau khi dịch vụ hoàn tất, bạn có thể đánh giá kết quả và đưa ra phản
            hồi về dịch vụ.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsultationBookingGuide;
