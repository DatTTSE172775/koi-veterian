import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Layout, Row } from "antd";

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: "center" }}>
      <Row justify="center" align="middle">
        <Col span={24}>
          <p>© 2023 Trung tâm Dịch vụ Thú y Cá Koi. Đã đăng ký bản quyền.</p>
        </Col>
        <Col span={24}>
          <FacebookOutlined style={{ fontSize: "24px", margin: "0 8px" }} />
          <TwitterOutlined style={{ fontSize: "24px", margin: "0 8px" }} />
          <InstagramOutlined style={{ fontSize: "24px", margin: "0 8px" }} />
        </Col>
      </Row>
    </AntFooter>
  );
};

export default Footer;
