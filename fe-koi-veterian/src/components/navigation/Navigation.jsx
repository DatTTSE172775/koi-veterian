import { BellOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../store/authSlide";
import "./Navigation.scss";

const Navigation = () => {
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const selectedKey = location.pathname; // Lấy pathname hiện tại để làm key cho menu
  const dispatch = useDispatch();

  // Lấy thông tin đăng nhập từ Redux store
  const { authenticated, user } = useSelector((state) => state.auth);

  // Xử lý đăng xuất
  const handleLogout = () => {
    dispatch(logout()); // Hàm logoutUser sẽ được định nghĩa trong authSlide
  };

  // Menu khi người dùng đã đăng nhập
  const userMenu = (
    <Menu>
      <Menu.Item key="account">
        <Link to="/account">Xem tài khoản</Link>
      </Menu.Item>
      <Menu.Item key="history">
        <Link to="/appointment-history">Lịch sử đặt lịch</Link>
      </Menu.Item>
      <Menu.Item key="messages">
        <Link to="/messages">Tin nhắn</Link>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout} icon={<LogoutOutlined />}>
        Đăng xuất
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="navigation">
      {/* Logo */}
      <div className="logo">
        <img
          src="/vite.svg"
          alt="Koi Veterinary Center"
          style={{ height: "40px" }}
        />
      </div>

      {/* Menu */}
      <Menu mode="horizontal" selectedKeys={[selectedKey]} className="menu">
        <Menu.Item key="/">
          <Link to="/">Trang chủ</Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Link to="/about">Giới thiệu</Link>
        </Menu.Item>
        <Menu.Item key="/services">
          <Link to="/services">Dịch vụ</Link>
        </Menu.Item>

        <Menu.SubMenu key="/services/appointment" title="Đặt lịch hẹn">
          <Menu.Item key="/services/online-consultation">
            <Link to="/services/online-consultation">Tư vấn trực tuyến</Link>
          </Menu.Item>
          <Menu.Item key="/services/home-consultation">
            <Link to="/services/home-consultation">Kiểm tra tại nhà</Link>
          </Menu.Item>
          <Menu.Item key="/services/disease-treatment">
            <Link to="/services/disease-treatment">Điều trị bệnh</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="/veterianOverview">
          <Link to="/veterianOverview">Bác sĩ</Link>
        </Menu.Item>
        <Menu.Item key="/support">
          <Link to="/support">Hỗ trợ</Link>
        </Menu.Item>
      </Menu>

      {/* Nút Đăng ký và Đăng nhập / Avatar và thông báo */}
      <div className="auth-buttons">
        {authenticated ? (
          <div className="logged-in-menu">
            {/* Icon thông báo */}
            <Badge count={5} className="notification-icon">
              <BellOutlined style={{ fontSize: "20px", marginRight: "20px" }} />
            </Badge>

            {/* Avatar và tên người dùng */}
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <div className="user-profile">
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
                <span className="username">{user?.fullName}</span>
              </div>
            </Dropdown>
          </div>
        ) : (
          <>
            <Button type="default" className="register-btn">
              <Link to="/register">Đăng ký</Link>
            </Button>
            <Button type="primary" className="login-btn">
              <Link to="/login">Đăng nhập</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
