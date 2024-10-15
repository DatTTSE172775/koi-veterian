import "./OnlineConsultationServiceOverview.scss";

const OnlineConsultationServiceOverview = () => {
  return (
    <div className="onlineBookingPage-service-overview">
      <h2>Tổng quan về dịch vụ tư vấn trực tuyến</h2>
      <div className="onlineBookingPage-service-details">
        <p>
          Dịch vụ tư vấn trực tuyến của chúng tôi giúp bạn kết nối với các bác
          sĩ chuyên gia mà không cần phải rời khỏi nhà. Với dịch vụ này, bạn có
          thể:
        </p>
        <ul>
          <li>Tiết kiệm thời gian di chuyển</li>
          <li>Nhận tư vấn nhanh chóng từ các bác sĩ có chuyên môn</li>
          <li>Giải quyết các vấn đề về sức khỏe cá Koi ngay tại nhà</li>
        </ul>
        <p>
          Bất kỳ vấn đề nào liên quan đến sức khỏe của cá Koi đều có thể được
          giải quyết một cách hiệu quả thông qua dịch vụ tư vấn trực tuyến của
          chúng tôi.
        </p>
        <img
          src="https://via.placeholder.com/1920x400"
          alt="Consultation overview"
          className="onlineBookingPage-service-image"
        />
      </div>
    </div>
  );
};

export default OnlineConsultationServiceOverview;
