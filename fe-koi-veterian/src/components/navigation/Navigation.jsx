import {
  HomeOutlined,
  InfoCircleOutlined,
  MedicineBoxOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Trang chủ</Link>
      </Menu.Item>
      <Menu.Item key="about" icon={<InfoCircleOutlined />}>
        <Link to="/about">Giới thiệu</Link>
      </Menu.Item>
      <Menu.Item key="services" icon={<MedicineBoxOutlined />}>
        <Link to="/services">Dịch vụ</Link>
      </Menu.Item>
      <Menu.Item key="faq" icon={<QuestionCircleOutlined />}>
        <Link to="/faq">Câu hỏi thường gặp</Link>
      </Menu.Item>
      <Menu.Item key="contact" icon={<PhoneOutlined />}>
        <Link to="/contact">Liên hệ</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
