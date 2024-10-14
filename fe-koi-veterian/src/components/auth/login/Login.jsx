import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/authSlide";
import "./Login.scss";

const Login = ({ onSuccess, onError }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, authenticated } = useSelector((state) => state.auth);

  // Nếu người dùng đã đăng nhập, điều hướng về trang chính
  if (authenticated) {
    navigate("/");
  }

  // Xử lý khi form được submit
  const onFinish = async (values) => {
    try {
      // Dispatch loginUser action mà không cần lưu trữ result
      await dispatch(
        loginUser({
          userName: values.username,
          password: values.password,
        })
      ).unwrap();

      // Khi đăng nhập thành công, gọi hàm onSuccess và hiển thị notification qua LoginPage
      onSuccess();
    } catch (error) {
      // Khi đăng nhập thất bại, gọi hàm onError và hiển thị thông báo lỗi
      onError(error.message || "Login failed!");
    }
  };

  return (
    <div className="login-container">
      <Form
        name="login_form"
        className="login-form"
        initialValues={{
          remember: true,
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
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          {/* Remember me checkbox */}
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Nhớ tôi</Checkbox>
          </Form.Item>
          <Link to="/forget-password" className="login-form-forgot">
            Quên mật khẩu ?
          </Link>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={loading}
          >
            Đăng nhập
          </Button>
          Bạn chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

// Define PropTypes for the component
Login.propTypes = {
  onSuccess: PropTypes.func.isRequired, // Hàm onSuccess là bắt buộc
  onError: PropTypes.func.isRequired, // Hàm onError là bắt buộc
};

export default Login;
