import { Carousel } from "antd";
import "./OnlineConsultationTestimonials.scss";

const OnlineConsultationTestimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      feedback:
        "Dịch vụ điều trị bệnh cho cá rất chuyên nghiệp. Bác sĩ đã giúp cá Koi của tôi hồi phục rất nhanh chóng.",
      beforeImage: "https://via.placeholder.com/150",
      afterImage: "https://via.placeholder.com/150",
    },
    {
      name: "Trần Thị B",
      feedback:
        "Tôi rất hài lòng với dịch vụ điều trị tại nhà. Các bác sĩ rất tận tâm và hướng dẫn kỹ càng.",
      beforeImage: "https://via.placeholder.com/150",
      afterImage: "https://via.placeholder.com/150",
    },
    {
      name: "Lê Văn C",
      feedback:
        "Cá của tôi đã khỏe lại nhờ sự điều trị chuyên nghiệp của các bác sĩ tại trung tâm.",
      beforeImage: "https://via.placeholder.com/150",
      afterImage: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="onlineBookingPage-testimonials">
      <h2>Đánh giá từ khách hàng</h2>
      <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="onlineBookingPage-testimonial">
            <div className="onlineBookingPage-images">
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

export default OnlineConsultationTestimonials;
