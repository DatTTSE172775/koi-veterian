import {
  HomeOutlined,
  MedicineBoxOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, List, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ServicesPage = () => {
  const services = [
    {
      title: "Tư vấn trực tuyến",
      description:
        "Đặt lịch tư vấn trực tuyến với bác sĩ thú y của chúng tôi để được hỗ trợ nhanh chóng.",
      icon: (
        <VideoCameraOutlined style={{ fontSize: "2rem", color: "#1890ff" }} />
      ),
      details: [
        "Tư vấn về sức khỏe cá Koi",
        "Hướng dẫn chăm sóc và nuôi dưỡng",
        "Giải đáp thắc mắc về bệnh lý",
      ],
    },
    {
      title: "Đánh giá hồ cá tại nhà",
      description:
        "Bác sĩ thú y sẽ đến tận nhà để đánh giá chất lượng hồ cá Koi và tư vấn cải thiện.",
      icon: <HomeOutlined style={{ fontSize: "2rem", color: "#52c41a" }} />,
      details: [
        "Kiểm tra chất lượng nước",
        "Đánh giá hệ thống lọc",
        "Tư vấn cải thiện môi trường sống cho cá",
      ],
    },
    {
      title: "Điều trị bệnh và kê đơn",
      description:
        "Dịch vụ điều trị bệnh cho cá và kê đơn thuốc, có thể thực hiện tại nhà hoặc tại trung tâm.",
      icon: (
        <MedicineBoxOutlined style={{ fontSize: "2rem", color: "#f5222d" }} />
      ),
      details: [
        "Chẩn đoán và điều trị bệnh",
        "Kê đơn thuốc phù hợp",
        "Theo dõi quá trình điều trị",
      ],
    },
  ];

  return (
    <div>
      <Title level={1}>Dịch Vụ Của Chúng Tôi</Title>
      <Paragraph>
        Trung tâm Dịch vụ Thú y Cá Koi cung cấp các dịch vụ chăm sóc sức khỏe
        toàn diện cho cá Koi của bạn. Từ tư vấn trực tuyến đến điều trị tại nhà,
        chúng tôi cam kết mang đến sự chăm sóc tốt nhất cho những chú cá quý giá
        của bạn.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: "2rem" }}>
        {services.map((service, index) => (
          <Col span={8} key={index}>
            <Card
              title={
                <span>
                  {service.icon}
                  <span style={{ marginLeft: "8px" }}>{service.title}</span>
                </span>
              }
              extra={<Button type="primary">Đặt lịch</Button>}
            >
              <Paragraph>{service.description}</Paragraph>
              <List
                size="small"
                dataSource={service.details}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ServicesPage;
