import { Carousel } from "antd";
import "./TreatmentBookingTestimonials.scss";

const TreatmentBookingTestimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      feedback:
        "Dịch vụ điều trị bệnh cho cá rất tuyệt vời. Cá Koi của tôi đã phục hồi rất nhanh sau khi điều trị.",
      beforeImage: "https://via.placeholder.com/150",
      afterImage: "https://via.placeholder.com/150",
    },
    {
      name: "Trần Thị B",
      feedback:
        "Tôi rất hài lòng với sự chuyên nghiệp của đội ngũ bác sĩ. Dịch vụ tại nhà rất tiện lợi và hiệu quả.",
      beforeImage: "https://via.placeholder.com/150",
      afterImage: "https://via.placeholder.com/150",
    },
    {
      name: "Lê Văn C",
      feedback:
        "Cá của tôi đã khỏe mạnh trở lại sau quá trình điều trị tại trung tâm. Cảm ơn đội ngũ bác sĩ!",
      beforeImage: "https://via.placeholder.com/150",
      afterImage: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="treatmentBookingPage-testimonials">
      <h2>Đánh giá từ khách hàng</h2>
      <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="treatmentBookingPage-testimonial">
            <div className="treatmentBookingPage-images">
              <img src={testimonial.beforeImage} alt="Before treatment" />
              <img src={testimonial.afterImage} alt="After treatment" />
            </div>
            <p>{testimonial.feedback}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TreatmentBookingTestimonials;
