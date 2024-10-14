import { Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import ForgetPasswordPage from "../pages/auth/forget-password/ForgetPasswordPage";
import LoginPage from "../pages/auth/login/LoginPage";
import RegisterPage from "../pages/auth/register/RegisterPage";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
