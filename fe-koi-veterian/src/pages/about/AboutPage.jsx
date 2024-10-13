import { HeartOutlined, TeamOutlined, TrophyOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Bác sĩ Nguyễn Văn A",
      role: "Chuyên gia cá Koi",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Bác sĩ Trần Thị B",
      role: "Chuyên gia bệnh lý thủy sinh",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Kỹ sư Lê Văn C",
      role: "Chuyên gia hệ thống lọc nước",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <div>
      <Title level={1}>Về Chúng Tôi</Title>
      <Paragraph>
        Trung tâm Dịch vụ Thú y Cá Koi của chúng tôi là đơn vị hàng đầu trong
        lĩnh vực chăm sóc sức khỏe cho cá Koi tại Việt Nam. Với đội ngũ bác sĩ
        thú y giàu kinh nghiệm và trang thiết bị hiện đại, chúng tôi cam kết
        mang đến dịch vụ chăm sóc tốt nhất cho những chú cá Koi quý giá của bạn.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: "2rem" }}>
        <Col span={8}>
          <Card>
            <TeamOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />
            <Title level={4}>Đội ngũ chuyên nghiệp</Title>
            <Paragraph>
              Các bác sĩ thú y của chúng tôi đều có chuyên môn cao và nhiều năm
              kinh nghiệm trong lĩnh vực chăm sóc cá Koi.
            </Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <TrophyOutlined style={{ fontSize: "2rem", color: "#52c41a" }} />
            <Title level={4}>Dịch vụ chất lượng cao</Title>
            <Paragraph>
              Chúng tôi cung cấp các dịch vụ chăm sóc toàn diện, từ tư vấn trực
              tuyến đến điều trị tại nhà hoặc tại trung tâm.
            </Paragraph>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <HeartOutlined style={{ fontSize: "2rem", color: "#f5222d" }} />
            <Title level={4}>Tận tâm với khách hàng</Title>
            <Paragraph>
              Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.
              Chúng tôi luôn lắng nghe và đáp ứng mọi nhu cầu của bạn.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Title level={2} style={{ marginTop: "3rem" }}>
        Đội Ngũ Chuyên Gia
      </Title>
      <Row gutter={[16, 16]}>
        {teamMembers.map((member, index) => (
          <Col span={8} key={index}>
            <Card>
              <Card.Meta
                avatar={<Avatar src={member.avatar} size={64} />}
                title={member.name}
                description={member.role}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutPage;
