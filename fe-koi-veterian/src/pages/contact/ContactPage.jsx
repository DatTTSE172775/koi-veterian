import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactPage = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Here you would typically send the form data to your backend
  };

  return (
    <div>
      <Title level={1}>Liên Hệ Với Chúng Tôi</Title>
      <Paragraph>
        Nếu bạn có bất kỳ câu hỏi hoặc cần hỗ trợ, đừng ngần ngại liên hệ với
        chúng tôi. Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ bạn.
      </Paragraph>

      <Row gutter={[16, 16]} style={{ marginTop: "2rem" }}>
        <Col span={12}>
          <Form name="contact" onFinish={onFinish} layout="vertical">
            <Form.Item
              name="name"
              label="Họ và tên"
              rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Vui lòng nhập email hợp lệ!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="phone" label="Số điện thoại">
              <Input />
            </Form.Item>
            <Form.Item
              name="message"
              label="Nội dung"
              rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
            >
              <TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Gửi
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>
          <Card title="Thông Tin Liên Hệ">
            <p>
              <MailOutlined /> Email: info@koivetcenter.com
            </p>
            <p>
              <PhoneOutlined /> Điện thoại: (84) 123-456-789
            </p>
            <p>
              <EnvironmentOutlined /> Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ
              Chí Minh
            </p>
          </Card>
          <Card title="Giờ Làm Việc" style={{ marginTop: "1rem" }}>
            <p>Thứ Hai - Thứ Sáu: 8:00 - 18:00</p>
            <p>Thứ Bảy: 8:00 - 12:00</p>
            <p>Chủ Nhật: Đóng cửa</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;
