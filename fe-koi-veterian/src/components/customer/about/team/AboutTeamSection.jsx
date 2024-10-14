import { Card, Col, Row } from "antd";
import "./AboutTeamSection.scss"; // Thêm file CSS riêng cho component này

const teamMembers = [
  {
    key: "1",
    name: "Dr. Nguyễn Văn A",
    title: "Bác sĩ thú y chính",
    description: "Với hơn 15 năm kinh nghiệm chăm sóc và điều trị cá Koi.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "2",
    name: "Dr. Lê Thị B",
    title: "Chuyên gia sức khỏe cá Koi",
    description:
      "Chuyên gia tư vấn sức khỏe cá Koi, đặc biệt trong việc phát hiện và điều trị các bệnh hiếm gặp.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "3",
    name: "Dr. Trần Văn C",
    title: "Người sáng lập",
    description:
      "Người sáng lập trung tâm, với tầm nhìn mang đến dịch vụ tốt nhất cho cá Koi tại Việt Nam.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "4",
    name: "Dr. Nguyễn Văn A",
    title: "Bác sĩ thú y chính",
    description: "Với hơn 15 năm kinh nghiệm chăm sóc và điều trị cá Koi.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "5",
    name: "Dr. Lê Thị B",
    title: "Chuyên gia sức khỏe cá Koi",
    description:
      "Chuyên gia tư vấn sức khỏe cá Koi, đặc biệt trong việc phát hiện và điều trị các bệnh hiếm gặp.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "6",
    name: "Dr. Trần Văn C",
    title: "Người sáng lập",
    description:
      "Người sáng lập trung tâm, với tầm nhìn mang đến dịch vụ tốt nhất cho cá Koi tại Việt Nam.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
];

const AboutTeamSection = () => {
  return (
    <div className="aboutPage-team-section">
      <h2 className="aboutPage-team-title">Đội ngũ của chúng tôi</h2>
      <Row gutter={[32, 32]}>
        {teamMembers.map((member) => (
          <Col xs={24} sm={12} md={8} key={member.key}>
            <Card
              hoverable
              cover={<img alt={member.name} src={member.imgSrc} />}
              className="aboutPage-team-card"
            >
              <Card.Meta title={member.name} description={member.title} />
              <p className="aboutPage-team-description">{member.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutTeamSection;
