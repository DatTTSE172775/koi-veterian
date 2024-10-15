import { Button, DatePicker, Form, Input, notification, Select } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountByUsername,
  getAvailableVeterinarians,
} from "../../../../store/accountSlide";
import "./BookingForm.scss";

const { Option } = Select;

const BookingForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  // Get user info from Redux
  const { user, authenticated } = useSelector((state) => state.auth);
  const {
    accountInfo,
    availableVeterinarians,
    loading: accountLoading,
  } = useSelector((state) => state.account);

  useEffect(() => {
    if (authenticated && user?.userName) {
      console.log("Fetching account info for:", user.userName);
      dispatch(getAccountByUsername(user.userName));
    }
  }, [authenticated, user, dispatch]);

  useEffect(() => {
    if (authenticated && accountInfo) {
      // Pre-fill form if account info is available
      form.setFieldsValue({
        username: accountInfo.userName,
        fullname: accountInfo.fullName,
        phone: accountInfo.phone,
      });
    }
  }, [accountInfo, authenticated, form]);

  // Fetch available veterinarians when date and shiftId change
  useEffect(() => {
    const appointmentTime = form.getFieldValue("appointmentTime");
    const shiftId = form.getFieldValue("shiftId");

    if (appointmentTime && shiftId) {
      const date = appointmentTime.format("YYYY-MM-DD");

      // Xóa danh sách bác sĩ trước khi fetch dữ liệu mới
      dispatch({
        type: "account/clearAvailableVeterinarians", // Hoặc một hành động để xóa danh sách cũ
      });

      // Dispatch action to fetch available veterinarians
      dispatch(getAvailableVeterinarians({ date, shiftId }));
    }
  }, [form, dispatch]);

  const onFinish = (values) => {
    // Simulate sending form data to API
    console.log("Form values:", values);

    // Show success notification
    notification.success({
      message: "Đặt lịch thành công",
      description: `Lịch hẹn của bạn đã được tạo thành công cho ngày ${values.appointmentTime.format(
        "YYYY-MM-DD"
      )}.`,
    });

    // Reset form after submission
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
          <Input disabled={authenticated} placeholder="Username" />
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
          name="shiftId"
          label="Chọn ca trực"
          rules={[{ required: true, message: "Vui lòng chọn ca trực!" }]}
        >
          <Select placeholder="Chọn ca trực">
            <Option value="1">06:00 - 07:00</Option>
            <Option value="2">07:00 - 08:00</Option>
            <Option value="3">08:00 - 09:00</Option>
            <Option value="4">09:00 - 10:00</Option>
            <Option value="5">10:00 - 11:00</Option>
            <Option value="6">11:00 - 12:00</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="appointmentTime"
          label="Thời gian hẹn"
          rules={[{ required: true, message: "Vui lòng chọn thời gian hẹn!" }]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          name="veterinarianId"
          label="Chọn bác sĩ"
          rules={[{ required: true, message: "Vui lòng chọn bác sĩ!" }]}
        >
          <Select placeholder="Chọn bác sĩ" loading={accountLoading}>
            {availableVeterinarians.length > 0 ? (
              availableVeterinarians.map((vet) => (
                <Option key={vet.accountId} value={vet.accountId}>
                  {vet.fullName}
                </Option>
              ))
            ) : (
              <Option disabled>Không có bác sĩ khả dụng</Option>
            )}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={accountLoading}>
            Đặt lịch
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default BookingForm;
