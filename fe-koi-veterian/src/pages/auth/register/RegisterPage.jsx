import { notification } from "antd";
import Register from "../../../components/auth/register/Register";
import "./RegisterPage.scss";

const RegisterPage = () => {
  // Function to open success notification
  const openNotificationSuccess = () => {
    notification.success({
      message: "Registration Successful",
      description:
        "Your account has been created successfully. Please check your email to verify your account.",
      placement: "topRight",
    });
  };

  // Function to open error notification
  const openNotificationError = (errorMessage) => {
    notification.error({
      message: "Registration Failed",
      description: errorMessage,
      placement: "topRight",
    });
  };

  return (
    <div className="register-page-container">
      <div className="register-box">
        <h1>Create Your Account</h1>
        <p>Please fill in the form to register</p>
        <Register
          onSuccess={openNotificationSuccess} // Pass success handler
          onError={openNotificationError} // Pass error handler
        />
      </div>
    </div>
  );
};

export default RegisterPage;
