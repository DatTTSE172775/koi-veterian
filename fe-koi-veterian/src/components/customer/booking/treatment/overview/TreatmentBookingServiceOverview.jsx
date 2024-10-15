import "./TreatmentBookingServiceOverview.scss";

const TreatmentBookingServiceOverview = () => {
  return (
    <div className="treatmentBookingPage-service-overview">
      <h2>Tổng quan về dịch vụ điều trị bệnh cho cá</h2>
      <div className="treatmentBookingPage-service-details">
        <p>
          Dịch vụ điều trị bệnh cho cá Koi của chúng tôi giúp bảo vệ sức khỏe và
          sự phát triển của cá. Dưới đây là các loại bệnh phổ biến mà cá Koi
          thường gặp:
        </p>
        <ul>
          <li>
            Nấm và ký sinh trùng: Các triệu chứng bao gồm ngứa, tróc vảy và mất
            màu sắc.
          </li>
          <li>
            Nhiễm khuẩn: Gây ra vết loét và sưng tấy ở các vùng da của cá.
          </li>
          <li>Bệnh về hô hấp: Cá thở khó và nổi lên mặt nước liên tục.</li>
        </ul>
        <p>
          Quy trình điều trị có thể được thực hiện tại nhà hoặc tại trung tâm.
          Bác sĩ sẽ kiểm tra tình trạng của cá và kê đơn thuốc nếu cần thiết.
          Sau khi điều trị, bác sĩ sẽ hướng dẫn bạn cách chăm sóc cá Koi để phục
          hồi sức khỏe.
        </p>
        <img
          src="https://via.placeholder.com/1920x400"
          alt="Fish Treatment Overview"
          className="treatmentBookingPage-service-image"
        />
      </div>
    </div>
  );
};

export default TreatmentBookingServiceOverview;
