import "./AboutMissionSection.scss"; // Tạo file CSS riêng cho component này

const AboutMissionSection = () => {
  return (
    <div className="aboutPage-mission-section">
      <div className="aboutPage-mission-content">
        <h2>Sứ mệnh và Giá trị của chúng tôi</h2>
        <p>
          Trung tâm Thú y Cá Koi của chúng tôi cam kết cung cấp dịch vụ chăm sóc
          và điều trị tốt nhất cho cá Koi. Với đội ngũ chuyên gia giàu kinh
          nghiệm và sự tận tâm, chúng tôi luôn nỗ lực để mang đến sự hài lòng
          cho khách hàng và đảm bảo sức khỏe toàn diện cho cá Koi.
        </p>
        <p>
          Tầm nhìn của chúng tôi là trở thành trung tâm hàng đầu trong việc chăm
          sóc cá Koi, giúp cộng đồng nuôi cá Koi có thể yên tâm về sức khỏe và
          sắc đẹp của cá.
        </p>
        <div className="aboutPage-mission-icons">
          <img src="https://via.placeholder.com/100" alt="Icon Tận tâm" />
          <img src="https://via.placeholder.com/100" alt="Icon Uy tín" />
          <img src="https://via.placeholder.com/100" alt="Icon Chuyên nghiệp" />
        </div>
      </div>
    </div>
  );
};

export default AboutMissionSection;
