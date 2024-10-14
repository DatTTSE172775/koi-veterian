import "./ServiceDetailSection.scss";

const serviceDetails = [
  {
    key: "1",
    title: "Tư vấn trực tuyến",
    description:
      "Dịch vụ tư vấn trực tuyến giúp bạn nhận được sự hỗ trợ từ các chuyên gia nhanh chóng mà không cần phải di chuyển. Chúng tôi cung cấp các tư vấn chuyên nghiệp, đưa ra hướng dẫn cụ thể và giải pháp kịp thời.",
    procedure:
      "Quy trình: Đăng ký tư vấn -> Xác nhận lịch hẹn -> Nhận tư vấn qua video call.",
    benefits:
      "Lợi ích: Tiết kiệm thời gian, tiện lợi, và được hỗ trợ ngay tại nhà.",
    imgSrc: "https://via.placeholder.com/400x300", // Placeholder image
  },
  {
    key: "2",
    title: "Khám tại nhà",
    description:
      "Dịch vụ khám tại nhà giúp cá Koi của bạn được kiểm tra sức khỏe mà không cần phải mang đến trung tâm. Đội ngũ bác sĩ sẽ đến tận nhà bạn với các trang thiết bị hiện đại.",
    procedure:
      "Quy trình: Đặt lịch khám -> Bác sĩ đến nhà -> Khám và đánh giá tình trạng sức khỏe của cá.",
    benefits:
      "Lợi ích: Tiện lợi, không gây stress cho cá, bảo đảm sức khỏe của cá ngay tại nhà.",
    imgSrc: "https://via.placeholder.com/400x300", // Placeholder image
  },
  {
    key: "3",
    title: "Điều trị tại trung tâm",
    description:
      "Với trang thiết bị hiện đại, chúng tôi cung cấp các dịch vụ điều trị chuyên sâu cho cá Koi. Các chuyên gia tại trung tâm sẽ đảm bảo cá Koi của bạn nhận được sự chăm sóc tốt nhất.",
    procedure:
      "Quy trình: Đặt lịch -> Đưa cá đến trung tâm -> Tiến hành điều trị theo phác đồ.",
    benefits:
      "Lợi ích: Điều trị chuyên sâu với sự hỗ trợ từ trang thiết bị hiện đại.",
    imgSrc: "https://via.placeholder.com/400x300", // Placeholder image
  },
];

const ServiceDetailSection = () => {
  return (
    <div className="servicePage-detail-section">
      {serviceDetails.map((service) => (
        <div key={service.key} className="servicePage-detail-item">
          <div className="servicePage-detail-content">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <p>
              <strong>{service.procedure}</strong>
            </p>
            <p>
              <strong>{service.benefits}</strong>
            </p>
          </div>
          <div className="servicePage-detail-image">
            <img src={service.imgSrc} alt={service.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceDetailSection;
