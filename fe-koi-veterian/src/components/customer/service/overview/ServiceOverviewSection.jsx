import { Card, Col, Row } from "antd";
import "./ServiceOverviewSection.scss";

const services = [
  {
    key: "1",
    title: "Tư vấn trực tuyến",
    description:
      "Nhận tư vấn từ các chuyên gia qua hệ thống trực tuyến mọi lúc, mọi nơi.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    key: "2",
    title: "Khám tại nhà",
    description:
      "Dịch vụ khám cá Koi tại nhà đảm bảo sự tiện lợi và an toàn cho cá của bạn.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    key: "3",
    title: "Điều trị tại trung tâm",
    description:
      "Trung tâm trang bị hiện đại để điều trị các bệnh lý phức tạp cho cá Koi.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
  },
];

const ServiceOverviewSection = () => {
  return (
    <div className="servicePage-overview-section">
      <h2 className="servicePage-overview-title">Dịch vụ của chúng tôi</h2>
      <Row gutter={[32, 32]}>
        {services.map((service) => (
          <Col xs={24} sm={12} md={8} key={service.key}>
            <Card
              hoverable
              cover={<img alt={service.title} src={service.imgSrc} />}
              className="servicePage-overview-card"
            >
              <Card.Meta
                title={service.title}
                description={service.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServiceOverviewSection;
