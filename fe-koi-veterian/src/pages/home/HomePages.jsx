import { Card, Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div>
      <Title level={1}>Chào mừng đến với Trung tâm Dịch vụ Thú y Cá Koi</Title>
      <Paragraph>
        Chúng tôi cung cấp dịch vụ chăm sóc sức khỏe chuyên nghiệp cho cá Koi
        của bạn.
      </Paragraph>
      <Row gutter={16}>
        <Col span={8}>
          <Card
            title="Tư vấn trực tuyến"
            extra={<a href="/services">Xem thêm</a>}
          >
            Đặt lịch tư vấn trực tuyến với bác sĩ thú y của chúng tôi.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Đánh giá hồ cá" extra={<a href="/services">Xem thêm</a>}>
            Bác sĩ thú y sẽ đến tận nhà để đánh giá chất lượng hồ cá Koi của
            bạn.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Điều trị bệnh" extra={<a href="/services">Xem thêm</a>}>
            Dịch vụ điều trị bệnh cho cá và kê đơn thuốc tại nhà hoặc tại trung
            tâm.
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
