import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import Login from "../../../components/auth/login/Login";
import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  // Function to open a success notification and navigate after login
  const openNotificationSuccess = () => {
    notification.success({
      message: "Login Successful",
      description: "You have successfully logged in.",
      placement: "topRight",
    });

    navigate("/");
  };

  // Function to open an error notification if login fails
  const openNotificationError = (errorMessage) => {
    notification.error({
      message: "Login Failed",
      description: errorMessage,
      placement: "topRight",
    });
  };

  return (
    <div className="login-page-container">
      <div className="login-box">
        <h1>Login to Your Account</h1>
        <p>Please enter your credentials to login</p>
        <Login
          onSuccess={openNotificationSuccess}
          onError={openNotificationError}
        />
      </div>
    </div>
  );
};

export default LoginPage;
