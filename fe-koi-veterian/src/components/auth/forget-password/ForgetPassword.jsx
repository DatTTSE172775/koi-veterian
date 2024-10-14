import { MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgetPassword.scss"; // Assuming you're using a CSS file for styling

const ForgetPassword = ({ onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      // Simulate successful password reset request
      if (values.email === "user@example.com") {
        onSuccess();
      } else {
        onError("Email not found!");
      }
    }, 1000);
  };

  return (
    <div className="forget-password-container">
      <Form
        name="forget_password_form"
        className="forget-password-form"
        onFinish={onFinish}
      >
        <h2>Reset Password</h2>
        <p>Please enter your email address to receive a reset link.</p>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not a valid email!",
            },
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="forget-password-form-button"
            loading={loading}
          >
            Gửi yêu cầu
          </Button>
          Bạn đã nhớ tài khoản ? <Link to="/login">Đăng nhập ngay</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

// Define PropTypes for the component
ForgetPassword.propTypes = {
  onSuccess: PropTypes.func.isRequired, // Define onSuccess as a required function
  onError: PropTypes.func.isRequired, // Define onError as a required function
};

export default ForgetPassword;
