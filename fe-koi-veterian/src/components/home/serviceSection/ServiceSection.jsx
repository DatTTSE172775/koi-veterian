import { Button, Card, Col, Row } from "antd";
import "./ServicesSection.scss";

const services = [
  {
    key: "1",
    title: "Tư vấn trực tuyến",
    description:
      "Nhận tư vấn từ các bác sĩ thú y của chúng tôi qua trực tuyến, giúp bạn chăm sóc cá Koi một cách dễ dàng.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Chi tiết",
  },
  {
    key: "2",
    title: "Khám tại nhà",
    description:
      "Dịch vụ khám cá Koi tại nhà, đảm bảo tiện lợi và nhanh chóng cho bạn.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Đặt dịch vụ",
  },
  {
    key: "3",
    title: "Điều trị tại trung tâm",
    description:
      "Đưa cá Koi đến trung tâm của chúng tôi để được điều trị tốt nhất với cơ sở vật chất hiện đại.",
    imgSrc: "https://via.placeholder.com/300x200",
    buttonText: "Chi tiết",
  },
];

const ServicesSection = () => {
  return (
    <div className="services-section">
      <h2>Dịch vụ của chúng tôi</h2>
      <Row gutter={[32, 32]}>
        {services.map((service) => (
          <Col xs={24} sm={12} md={8} key={service.key}>
            <Card
              hoverable
              cover={<img alt={service.title} src={service.imgSrc} />}
            >
              <Card.Meta
                title={service.title}
                description={service.description}
              />
              <Button type="primary" style={{ marginTop: "15px" }}>
                {service.buttonText}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesSection;
