import { Card, Col, Row } from "antd";
import "./AboutAchievementsSection.scss"; // Thêm file CSS riêng cho component này

const achievements = [
  {
    key: "1",
    title: "Chứng nhận quốc tế về chăm sóc cá Koi",
    description:
      "Trung tâm được cấp chứng nhận quốc tế về chăm sóc và điều trị cá Koi từ tổ chức XYZ.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "2",
    title: "Đối tác chiến lược với ABC",
    description:
      "Trung tâm hợp tác với tổ chức ABC, mang đến các dịch vụ chăm sóc tiêu chuẩn quốc tế.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "3",
    title: "Giải thưởng Dịch vụ Xuất sắc 2021",
    description:
      "Được trao tặng giải thưởng Dịch vụ Xuất sắc trong chăm sóc cá Koi năm 2021.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
];

const AboutAchievementsSection = () => {
  return (
    <div className="aboutPage-achievements-section">
      <h2 className="aboutPage-achievements-title">Chứng nhận và Thành tựu</h2>
      <Row gutter={[32, 32]}>
        {achievements.map((achievement) => (
          <Col xs={24} sm={12} md={8} key={achievement.key}>
            <Card
              hoverable
              cover={<img alt={achievement.title} src={achievement.imgSrc} />}
              className="aboutPage-achievement-card"
            >
              <Card.Meta
                title={achievement.title}
                description={achievement.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutAchievementsSection;
