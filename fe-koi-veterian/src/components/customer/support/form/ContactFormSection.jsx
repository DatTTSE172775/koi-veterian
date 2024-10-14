import { Button, Form, Input, message } from "antd";
import "./ContactFormSection.scss";

const ContactFormSection = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form submitted:", values);
    message.success(
      "Cảm ơn bạn đã gửi câu hỏi. Chúng tôi sẽ liên hệ lại sớm nhất có thể."
    );
    form.resetFields();
  };

  return (
    <div className="supportPage-contact-section">
      <h2>Gửi thắc mắc của bạn cho chúng tôi</h2>
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        className="supportPage-form"
      >
        <Form.Item
          name="name"
          label="Họ và tên"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input placeholder="Nhập họ và tên của bạn" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Vui lòng nhập email!" },
            { type: "email", message: "Vui lòng nhập email hợp lệ!" },
          ]}
        >
          <Input placeholder="Nhập email của bạn" />
        </Form.Item>

        <Form.Item
          name="question"
          label="Câu hỏi thắc mắc"
          rules={[
            { required: true, message: "Vui lòng nhập câu hỏi của bạn!" },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Nhập câu hỏi của bạn" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="supportPage-submit-button"
          >
            Gửi câu hỏi
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactFormSection;
