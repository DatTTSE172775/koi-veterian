import { Card, Col, Row } from "antd";
import "./ServicePackagesSection.scss";

const packages = [
  {
    key: "1",
    title: "Gói khám cơ bản",
    description:
      "Bao gồm kiểm tra sức khỏe tổng quát và tư vấn chăm sóc cá Koi.",
    price: "500,000 VND",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    key: "2",
    title: "Gói khám chuyên sâu",
    description:
      "Kiểm tra sức khỏe chi tiết, bao gồm xét nghiệm và đánh giá tình trạng sức khỏe chuyên sâu.",
    price: "1,500,000 VND",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    key: "3",
    title: "Gói điều trị tại trung tâm",
    description:
      "Điều trị chuyên sâu tại trung tâm với sự hỗ trợ của các thiết bị y tế hiện đại.",
    price: "2,500,000 VND",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
  },
];

const ServicePackagesSection = () => {
  return (
    <div className="servicePage-packages-section">
      <h2 className="servicePage-packages-title">Các gói dịch vụ</h2>
      <Row gutter={[32, 32]}>
        {packages.map((pkg) => (
          <Col xs={24} sm={12} md={8} key={pkg.key}>
            <Card
              hoverable
              cover={<img alt={pkg.title} src={pkg.imgSrc} />}
              className="servicePage-package-card"
            >
              <Card.Meta title={pkg.title} description={pkg.description} />
              <div className="servicePage-package-price">{pkg.price}</div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicePackagesSection;
