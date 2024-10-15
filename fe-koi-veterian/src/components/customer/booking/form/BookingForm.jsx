import { Button, DatePicker, Form, Input, notification, Select } from "antd";
import { useEffect } from "react";
import "./BookingForm.scss";

const { Option } = Select;

const BookingForm = () => {
  const [form] = Form.useForm();

  // Giả lập thông tin khách hàng đã đăng nhập
  const loggedInUser = {
    username: "nguyenvana",
    fullname: "Nguyễn Văn A",
    phone: "0123456789",
    email: "nguyenvana@example.com",
  };

  useEffect(() => {
    // Điền sẵn thông tin vào form khi người dùng đã đăng nhập
    form.setFieldsValue({
      username: loggedInUser.username,
      fullname: loggedInUser.fullname,
      phone: loggedInUser.phone,
    });
  });

  const onFinish = (values) => {
    // Giả lập việc gửi dữ liệu form đến API
    console.log("Form values:", values);

    // Hiển thị thông báo thành công
    notification.success({
      message: "Đặt lịch thành công",
      description: `Lịch hẹn của bạn đã được tạo thành công cho ngày ${values.appointmentTime.format(
        "YYYY-MM-DD"
      )}.`,
    });

    // Reset form sau khi hoàn tất
    form.resetFields();
  };

  return (
    <div className="booking-form-container">
      <h2>Đặt dịch vụ tư vấn trực tuyến</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="username"
          label="Tên đăng nhập"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          name="fullname"
          label="Họ và tên"
          rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
        >
          <Input placeholder="Nhập họ và tên" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Số điện thoại"
          rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
        >
          <Input placeholder="Nhập số điện thoại" />
        </Form.Item>

        <Form.Item
          name="veterinarianId"
          label="Chọn bác sĩ"
          rules={[{ required: true, message: "Vui lòng chọn bác sĩ!" }]}
        >
          <Select placeholder="Chọn bác sĩ">
            <Option value="1">Bác sĩ A</Option>
            <Option value="2">Bác sĩ B</Option>
            <Option value="3">Bác sĩ C</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="shiftId"
          label="Chọn ca trực"
          rules={[{ required: true, message: "Vui lòng chọn ca trực!" }]}
        >
          <Select placeholder="Chọn ca trực">
            <Option value="1">Ca sáng</Option>
            <Option value="2">Ca chiều</Option>
            <Option value="3">Ca tối</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="appointmentTime"
          label="Thời gian hẹn"
          rules={[{ required: true, message: "Vui lòng chọn thời gian hẹn!" }]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Đặt lịch
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookingForm;
