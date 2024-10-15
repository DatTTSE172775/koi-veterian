import "./OnlineConsultationBookingGuide.scss";

const OnlineConsultationBookingGuide = () => {
  return (
    <div className="onlineBookingPage-booking-guide">
      <h2>Hướng dẫn đặt lịch tư vấn trực tuyến</h2>
      <div className="onlineBookingPage-steps">
        <div className="onlineBookingPage-step">
          <h3>Bước 1: Chọn dịch vụ</h3>
          <p>
            Chọn dịch vụ tư vấn trực tuyến từ danh sách các dịch vụ của trung
            tâm.
          </p>
        </div>
        <div className="onlineBookingPage-step">
          <h3>Bước 2: Chọn bác sĩ</h3>
          <p>
            Chọn bác sĩ tư vấn theo mong muốn của bạn hoặc để trung tâm phân
            công bác sĩ phù hợp.
          </p>
        </div>
        <div className="onlineBookingPage-step">
          <h3>Bước 3: Xác nhận lịch hẹn</h3>
          <p>
            Xác nhận lịch hẹn và tiến hành tư vấn trực tuyến với bác sĩ qua hệ
            thống.
          </p>
        </div>
        <div className="onlineBookingPage-step">
          <h3>Bước 4: Thực hiện tư vấn</h3>
          <p>
            Thực hiện buổi tư vấn trực tuyến với bác sĩ, giải đáp các thắc mắc
            về sức khỏe cá Koi.
          </p>
        </div>
        <div className="onlineBookingPage-step">
          <h3>Bước 5: Đánh giá dịch vụ</h3>
          <p>Sau khi tư vấn, đánh giá kết quả và đưa ra phản hồi về dịch vụ.</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineConsultationBookingGuide;
