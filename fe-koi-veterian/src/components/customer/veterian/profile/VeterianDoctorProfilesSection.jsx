import { Card, Col, Row } from "antd";
import "./VeterianDoctorProfilesSection.scss";

const doctors = [
  {
    key: "1",
    name: "Dr. Nguyễn Văn A",
    specialization: "Chuyên gia điều trị bệnh cho cá Koi",
    description:
      "Với hơn 15 năm kinh nghiệm trong điều trị và chăm sóc cá Koi, Dr. Nguyễn Văn A đã chữa trị thành công nhiều ca bệnh khó.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "2",
    name: "Dr. Trần Thị B",
    specialization: "Chuyên gia phẫu thuật cá Koi",
    description:
      "Dr. Trần Thị B là một trong những chuyên gia phẫu thuật hàng đầu với nhiều năm kinh nghiệm trong lĩnh vực phẫu thuật và điều trị cá Koi.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "3",
    name: "Dr. Phạm Văn C",
    specialization: "Chuyên gia tư vấn chăm sóc cá Koi",
    description:
      "Chuyên tư vấn sức khỏe cho cá Koi và đưa ra các giải pháp chăm sóc phù hợp, Dr. Phạm Văn C luôn tận tình với khách hàng.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
];

const VeterianDoctorProfilesSection = () => {
  return (
    <div className="veterianPage-doctors-section">
      <h2 className="veterianPage-doctors-title">Thông tin đội ngũ bác sĩ</h2>
      <Row gutter={[32, 32]}>
        {doctors.map((doctor) => (
          <Col xs={24} sm={12} md={8} key={doctor.key}>
            <Card
              hoverable
              cover={<img alt={doctor.name} src={doctor.imgSrc} />}
              className="veterianPage-doctor-card"
            >
              <Card.Meta
                title={doctor.name}
                description={doctor.specialization}
              />
              <p className="veterianPage-doctor-description">
                {doctor.description}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default VeterianDoctorProfilesSection;
