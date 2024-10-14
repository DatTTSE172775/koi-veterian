import "./HomeInspectionBookingGuide.scss";

const HomeInspectionBookingGuide = () => {
  return (
    <div className="supportPage-booking-guide">
      <h2>Quy trình đặt dịch vụ kiểm tra hồ cá tại nhà</h2>
      <ol className="supportPage-booking-steps">
        <li>
          <strong>Bước 1:</strong> Chọn dịch vụ kiểm tra hồ cá tại nhà từ danh
          sách các dịch vụ của trung tâm.
        </li>
        <li>
          <strong>Bước 2:</strong> Chọn bác sĩ thực hiện (hoặc để trung tâm phân
          công bác sĩ nếu không chỉ định).
        </li>
        <li>
          <strong>Bước 3:</strong> Bác sĩ đến nhà bạn, kiểm tra hồ cá và đưa ra
          đánh giá, tư vấn cải thiện hồ cá đạt chuẩn.
        </li>
        <li>
          <strong>Bước 4:</strong> Sau khi kiểm tra, khách hàng đánh giá kết quả
          và đưa ra phản hồi về dịch vụ.
        </li>
      </ol>
    </div>
  );
};

export default HomeInspectionBookingGuide;
