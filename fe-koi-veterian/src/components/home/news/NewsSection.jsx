import { Button, Card, Col, Row } from "antd";
import "./NewsSection.scss";

const newsList = [
  {
    key: "1",
    title: "Bí quyết chăm sóc cá Koi vào mùa đông",
    description:
      "Mùa đông là thời điểm quan trọng để chăm sóc sức khỏe cá Koi. Hãy cùng tìm hiểu những bí quyết để giữ cá Koi luôn khỏe mạnh.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Xem thêm",
  },
  {
    key: "2",
    title: "Những dấu hiệu cá Koi cần được kiểm tra sức khỏe",
    description:
      "Hãy nhận biết những dấu hiệu khi cá Koi của bạn có thể đang gặp vấn đề về sức khỏe và cần được kiểm tra bởi bác sĩ thú y.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Xem thêm",
  },
  {
    key: "3",
    title: "Cập nhật mới từ trung tâm: Khám tại nhà",
    description:
      "Trung tâm Dịch vụ Thú y Cá Koi chúng tôi vừa triển khai dịch vụ khám tại nhà nhằm đáp ứng nhu cầu tiện lợi của khách hàng.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Xem thêm",
  },
  {
    key: "4",
    title: "Bí quyết chăm sóc cá Koi vào mùa đông",
    description:
      "Mùa đông là thời điểm quan trọng để chăm sóc sức khỏe cá Koi. Hãy cùng tìm hiểu những bí quyết để giữ cá Koi luôn khỏe mạnh.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Xem thêm",
  },
  {
    key: "5",
    title: "Những dấu hiệu cá Koi cần được kiểm tra sức khỏe",
    description:
      "Hãy nhận biết những dấu hiệu khi cá Koi của bạn có thể đang gặp vấn đề về sức khỏe và cần được kiểm tra bởi bác sĩ thú y.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Xem thêm",
  },
  {
    key: "6",
    title: "Cập nhật mới từ trung tâm: Khám tại nhà",
    description:
      "Trung tâm Dịch vụ Thú y Cá Koi chúng tôi vừa triển khai dịch vụ khám tại nhà nhằm đáp ứng nhu cầu tiện lợi của khách hàng.",
    imgSrc: "https://via.placeholder.com/300x200", // Placeholder image
    buttonText: "Xem thêm",
  },
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2>Tin tức và cập nhật</h2>
      <Row gutter={[32, 32]}>
        {newsList.map((news) => (
          <Col xs={24} sm={12} md={8} key={news.key}>
            <Card hoverable cover={<img alt={news.title} src={news.imgSrc} />}>
              <Card.Meta title={news.title} description={news.description} />
              <Button type="primary" style={{ marginTop: "15px" }}>
                {news.buttonText}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsSection;
