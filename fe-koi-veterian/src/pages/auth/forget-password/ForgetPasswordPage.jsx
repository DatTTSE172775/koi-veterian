import { notification } from "antd";
import ForgetPassword from "../../../components/auth/forget-password/ForgetPassword";
import "./ForgetPasswordPage.scss"; // Assuming you're using CSS for styling the page

const ForgetPasswordPage = () => {
  // Function to open a success notification after sending the reset link
  const openNotificationSuccess = () => {
    notification.success({
      message: "Reset Link Sent",
      description:
        "A password reset link has been sent to your email address. Please check your inbox.",
      placement: "topRight",
    });
  };

  // Function to open an error notification if sending the reset link fails
  const openNotificationError = (errorMessage) => {
    notification.error({
      message: "Reset Failed",
      description: errorMessage,
      placement: "topRight",
    });
  };

  return (
    <div className="forget-password-page-container">
      <div className="forget-password-box">
        <h1>Forgot Password</h1>
        <p>Enter your email to receive a reset link</p>
        <ForgetPassword
          onSuccess={openNotificationSuccess}
          onError={openNotificationError}
        />
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
