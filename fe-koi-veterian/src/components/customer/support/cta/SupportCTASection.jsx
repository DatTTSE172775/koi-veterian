import { Button } from "antd";
import "./SupportCTASection.scss";

const SupportCTASection = () => {
  return (
    <div className="supportPage-cta-section">
      <div className="supportPage-cta-content">
        <h2>Liên hệ ngay để được hỗ trợ</h2>
        <p>
          Chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc và cung cấp các dịch vụ
          chăm sóc cá Koi tốt nhất cho bạn.
        </p>
        <Button type="primary" size="large" className="supportPage-cta-button">
          Gửi câu hỏi
        </Button>
      </div>
    </div>
  );
};

export default SupportCTASection;
