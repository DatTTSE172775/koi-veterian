import { Button, Card, Col, Row } from "antd";
import "./AboutSummaryServicesSection.scss"; // Thêm file CSS riêng cho component này

const summaryServices = [
  {
    key: "1",
    title: "Tư vấn trực tuyến",
    description:
      "Dịch vụ tư vấn trực tuyến giúp bạn chăm sóc cá Koi một cách nhanh chóng và tiện lợi từ bất cứ đâu.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Tìm hiểu thêm",
  },
  {
    key: "2",
    title: "Khám tại nhà",
    description:
      "Chúng tôi cung cấp dịch vụ khám tại nhà để đảm bảo cá Koi của bạn được chăm sóc tốt nhất ngay tại nhà.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Tìm hiểu thêm",
  },
  {
    key: "3",
    title: "Điều trị tại trung tâm",
    description:
      "Đưa cá Koi đến trung tâm để được điều trị bởi đội ngũ chuyên gia và trang thiết bị hiện đại.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Tìm hiểu thêm",
  },
];

const AboutSummaryServicesSection = () => {
  return (
    <div className="aboutPage-summary-services-section">
      <h2 className="aboutPage-summary-services-title">
        Dịch vụ của chúng tôi
      </h2>
      <p className="aboutPage-summary-services-description">
        Tại Trung tâm Thú y Cá Koi, chúng tôi cam kết mang đến những dịch vụ
        chăm sóc tốt nhất cho cá Koi. Dưới đây là những dịch vụ mà trung tâm
        cung cấp, dựa trên sự tận tâm và chuyên nghiệp.
      </p>
      <Row gutter={[32, 32]}>
        {summaryServices.map((service) => (
          <Col xs={24} sm={12} md={8} key={service.key}>
            <Card
              hoverable
              cover={<img alt={service.title} src={service.imgSrc} />}
              className="aboutPage-summary-service-card"
            >
              <Card.Meta
                title={service.title}
                description={service.description}
              />
              <Button
                type="primary"
                className="aboutPage-summary-service-button"
                style={{ marginTop: "15px" }}
              >
                {service.buttonText}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutSummaryServicesSection;
