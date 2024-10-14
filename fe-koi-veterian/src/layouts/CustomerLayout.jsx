import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

const { Content } = Layout;

const CustomerLayout = () => {
  return (
    <Layout>
      <Navigation />
      <Content style={{ padding: "0 50px", marginTop: 64 }}>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default CustomerLayout;
