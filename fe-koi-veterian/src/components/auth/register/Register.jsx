import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerNewUser } from "../../../store/authSlide";
import "./Register.scss";

const Register = ({ onSuccess, onError }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const onFinish = async (values) => {
    try {
      // Dispatch register action and handle success
      await dispatch(
        registerNewUser({
          userName: values.username, // Correct field names matching the API
          password: values.password,
          fullName: values.fullName, // Changed 'fullname' to 'fullName'
          phone: values.phone,
          email: values.email,
        })
      ).unwrap();

      // Call the onSuccess callback if registration is successful
      onSuccess();
    } catch (error) {
      // Call the onError callback if there's an error
      onError(error.message || "Registration failed!");
    }
  };

  return (
    <div className="register-container">
      <Form
        name="register_form"
        className="register-form"
        initialValues={{
          agree: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          name="fullName"
          rules={[{ required: true, message: "Please input your Full Name!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Full Name"
          />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            { type: "email", message: "The input is not a valid email!" },
            { required: true, message: "Please input your Email!" },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "Please input your Phone number!" },
          ]}
        >
          <Input
            prefix={<PhoneOutlined className="site-form-item-icon" />}
            placeholder="Phone"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match!"));
              },
            }),
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item
          name="agree"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error("You must agree to the terms")),
            },
          ]}
        >
          <Checkbox>I accept all the terms and conditions</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
            loading={loading} // Show loading state when registering
          >
            Register
          </Button>
          Already have an account? <Link to="/login">Log in here</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

// Define PropTypes for the component
Register.propTypes = {
  onSuccess: PropTypes.func.isRequired, // Define onSuccess as a required function
  onError: PropTypes.func.isRequired, // Define onError as a required function
};

export default Register;
