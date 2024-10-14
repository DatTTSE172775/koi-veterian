import "./TreatmentServiceBookingGuide.scss";

const TreatmentServiceBookingGuide = () => {
  return (
    <div className="supportPage-booking-guide">
      <h2>Quy trình đặt dịch vụ điều trị bệnh cho cá</h2>
      <ol className="supportPage-booking-steps">
        <li>
          <strong>Bước 1:</strong> Chọn dịch vụ điều trị bệnh cho cá từ danh
          sách các dịch vụ của trung tâm.
        </li>
        <li>
          <strong>Bước 2:</strong> Chọn bác sĩ thực hiện (hoặc để trung tâm phân
          công bác sĩ) và địa điểm điều trị (tại nhà hoặc tại trung tâm).
        </li>
        <li>
          <strong>Bước 3:</strong> Bác sĩ điều trị và kê đơn thuốc (nếu cần).
        </li>
        <li>
          <strong>Bước 4:</strong> Sau khi điều trị, khách hàng đánh giá kết quả
          và đưa ra phản hồi về dịch vụ.
        </li>
      </ol>
    </div>
  );
};

export default TreatmentServiceBookingGuide;
