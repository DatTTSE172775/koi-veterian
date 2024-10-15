import { Carousel } from "antd";
import "./OnlineConsultationTestimonials.scss";

const OnlineConsultationTestimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Văn A",
      feedback:
        "Dịch vụ tư vấn trực tuyến rất tiện lợi và nhanh chóng. Tôi không cần phải di chuyển mà vẫn nhận được sự tư vấn nhiệt tình từ bác sĩ.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Trần Thị B",
      feedback:
        "Bác sĩ tư vấn rất chuyên nghiệp và giúp tôi hiểu rõ hơn về tình trạng sức khỏe của cá Koi. Tôi rất hài lòng!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Lê Văn C",
      feedback:
        "Tư vấn online rất tiện ích, tôi có thể đặt lịch bất cứ lúc nào và nhận được phản hồi nhanh chóng. Tôi sẽ tiếp tục sử dụng dịch vụ.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="onlineBookingPage-testimonials">
      <h2>Đánh giá từ khách hàng</h2>
      <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="onlineBookingPage-testimonial">
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.feedback}</p>
            <h4>{testimonial.name}</h4>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default OnlineConsultationTestimonials;
