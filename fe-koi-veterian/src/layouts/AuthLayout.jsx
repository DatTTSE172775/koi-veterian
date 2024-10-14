import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Content } = Layout;

const AuthLayout = () => {
  return (
    <Layout>
      <Content>
        <div>
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
};

export default AuthLayout;
