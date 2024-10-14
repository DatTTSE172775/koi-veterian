import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

const { Content } = Layout;

const CustomerLayout = () => {
  return (
    <Layout>
      <Navigation />
      <Content
        style={{
          padding: "5px",
          maxWidth: "1475px",
          margin: "0px auto",
          backgroundColor: "#fff",
        }}
      >
        <div>
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default CustomerLayout;
