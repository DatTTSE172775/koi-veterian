import { Button, Col, Form, Input, Row } from "antd";
import "./ContactSection.scss";

const ContactSection = () => {
  const onFinish = (values) => {
    console.log("Received values from form: ", values);
  };

  return (
    <div className="contact-section">
      <h2>Liên hệ</h2>
      <Row gutter={[32, 32]} className="contact-info">
        <Col xs={24} md={8}>
          <div className="info-item">
            <h3>Địa chỉ</h3>
            <p>123 Đường Koi, Quận 1, Thành phố Hồ Chí Minh</p>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="info-item">
            <h3>Điện thoại</h3>
            <p>(+84) 123 456 789</p>
          </div>
        </Col>
        <Col xs={24} md={8}>
          <div className="info-item">
            <h3>Email</h3>
            <p>info@koivet.com</p>
          </div>
        </Col>
      </Row>
      <Row gutter={[32, 32]} className="contact-form">
        <Col xs={24} md={12}>
          <Form name="contact" layout="vertical" onFinish={onFinish}>
            <Form.Item
              name="name"
              label="Tên của bạn"
              rules={[
                { required: true, message: "Vui lòng nhập tên của bạn!" },
              ]}
            >
              <Input placeholder="Nhập tên của bạn" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập email!",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Nhập email của bạn" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Nội dung"
              rules={[{ required: true, message: "Vui lòng nhập nội dung!" }]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Nhập nội dung cần liên hệ"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Gửi câu hỏi
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} md={12}>
          <img
            src="https://via.placeholder.com/500x400"
            alt="Map Placeholder"
            className="contact-map"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ContactSection;
