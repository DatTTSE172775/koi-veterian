import "./OnlineConsultationBookingGuide.scss";

const OnlineConsultationBookingGuide = () => {
  return (
    <div className="supportPage-booking-guide">
      <h2>Quy trình đặt dịch vụ tư vấn trực tuyến</h2>
      <ol className="supportPage-booking-steps">
        <li>
          <strong>Bước 1:</strong> Chọn dịch vụ tư vấn trực tuyến từ danh sách
          các dịch vụ của trung tâm.
        </li>
        <li>
          <strong>Bước 2:</strong> Chọn bác sĩ tư vấn theo mong muốn của bạn
          hoặc để trung tâm phân công bác sĩ.
        </li>
        <li>
          <strong>Bước 3:</strong> Xác nhận lịch hẹn và tiến hành tư vấn trực
          tuyến với bác sĩ qua hệ thống.
        </li>
        <li>
          <strong>Bước 4:</strong> Sau khi tư vấn, đánh giá kết quả và đưa ra
          phản hồi về dịch vụ.
        </li>
      </ol>
    </div>
  );
};

export default OnlineConsultationBookingGuide;
