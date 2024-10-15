import "./OnlineConsultationServiceOverview.scss";

const OnlineConsultationServiceOverview = () => {
  return (
    <div className="onlineBookingPage-service-overview">
      <h2>Tổng quan về dịch vụ điều trị bệnh cho cá</h2>
      <div className="onlineBookingPage-service-details">
        <p>
          Dịch vụ điều trị bệnh cho cá của chúng tôi giúp đảm bảo sức khỏe cho
          những chú cá Koi của bạn. Với dịch vụ này, bạn có thể:
        </p>
        <ul>
          <li>
            Điều trị các loại bệnh phổ biến ở cá Koi như nấm, vi khuẩn, ký sinh
            trùng, v.v.
          </li>
          <li>
            Nhận tư vấn và điều trị tại nhà hoặc tại trung tâm với các bác sĩ
            chuyên gia.
          </li>
          <li>
            Được hỗ trợ chăm sóc sau điều trị và hướng dẫn các bước chăm sóc cá
            Koi để phục hồi.
          </li>
        </ul>
        <p>
          Chúng tôi cam kết mang lại dịch vụ điều trị tốt nhất để bảo vệ sức
          khỏe và sự phát triển của cá Koi. Thời gian phục hồi thường kéo dài từ
          1-2 tuần tùy thuộc vào tình trạng của cá.
        </p>
        <img
          src="https://via.placeholder.com/1920x400"
          alt="Fish Treatment Overview"
          className="onlineBookingPage-service-image"
        />
      </div>
    </div>
  );
};

export default OnlineConsultationServiceOverview;
