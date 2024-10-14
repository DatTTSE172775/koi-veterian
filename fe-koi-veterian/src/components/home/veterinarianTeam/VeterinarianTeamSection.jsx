import { Avatar, Card, Col, Row } from "antd";
import "./VeterinarianTeamSection.scss";

const team = [
  {
    key: "1",
    name: "Dr. Nguyễn Văn A",
    title: "Chuyên gia chăm sóc cá Koi",
    description:
      "Với hơn 10 năm kinh nghiệm trong việc chăm sóc và điều trị cá Koi, Dr. A là một trong những chuyên gia hàng đầu.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "2",
    name: "Dr. Lê Thị B",
    title: "Bác sĩ thú y chuyên khoa cá Koi",
    description:
      "Dr. B có nhiều năm kinh nghiệm trong khám và điều trị các bệnh thường gặp của cá Koi.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "3",
    name: "Dr. Trần Văn C",
    title: "Chuyên gia tư vấn sức khỏe cá Koi",
    description:
      "Với kinh nghiệm sâu rộng trong tư vấn sức khỏe cá Koi, Dr. C đã hỗ trợ nhiều chủ nuôi giữ cho cá của họ luôn khỏe mạnh.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "4",
    name: "Dr. Nguyễn Văn A",
    title: "Chuyên gia chăm sóc cá Koi",
    description:
      "Với hơn 10 năm kinh nghiệm trong việc chăm sóc và điều trị cá Koi, Dr. A là một trong những chuyên gia hàng đầu.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "5",
    name: "Dr. Lê Thị B",
    title: "Bác sĩ thú y chuyên khoa cá Koi",
    description:
      "Dr. B có nhiều năm kinh nghiệm trong khám và điều trị các bệnh thường gặp của cá Koi.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "6",
    name: "Dr. Trần Văn C",
    title: "Chuyên gia tư vấn sức khỏe cá Koi",
    description:
      "Với kinh nghiệm sâu rộng trong tư vấn sức khỏe cá Koi, Dr. C đã hỗ trợ nhiều chủ nuôi giữ cho cá của họ luôn khỏe mạnh.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
];

const VeterinarianTeamSection = () => {
  return (
    <div className="veterinarian-team-section">
      <h2>Đội ngũ bác sĩ thú y</h2>
      <Row gutter={[32, 32]}>
        {team.map((doctor) => (
          <Col xs={24} sm={12} md={8} key={doctor.key}>
            <Card className="doctor-card">
              <Card.Meta
                avatar={<Avatar size={100} src={doctor.imgSrc} />}
                title={doctor.name}
                description={doctor.title}
              />
              <p>{doctor.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VeterinarianTeamSection;
