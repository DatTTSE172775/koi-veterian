import { Col, Row } from "antd";
import "./AboutUsSection.scss";

const AboutUsSection = () => {
  return (
    <div className="about-us-section">
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <div className="about-us-content">
            <h2>Giới thiệu về trung tâm</h2>
            <p>
              Trung tâm Dịch vụ Thú y Cá Koi chuyên cung cấp các dịch vụ chăm
              sóc sức khỏe cho cá Koi. Với đội ngũ bác sĩ thú y giàu kinh
              nghiệm, chúng tôi cam kết mang lại sự chăm sóc tốt nhất cho các bé
              Koi của bạn.
            </p>
            <p>
              Sứ mệnh của chúng tôi là giúp cá Koi luôn khỏe mạnh và xinh đẹp,
              cung cấp các dịch vụ tư vấn, khám chữa bệnh và điều trị tận tâm.
            </p>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className="about-us-image">
            <img
              src="https://placehold.co/400"
              alt="Koi Veterinary Service Center"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUsSection;
