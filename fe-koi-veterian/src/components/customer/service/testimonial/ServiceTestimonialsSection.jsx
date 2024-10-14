import { Avatar, Carousel } from "antd";
import "./ServiceTestimonialsSection.scss";

const testimonials = [
  {
    key: "1",
    name: "Nguyễn Văn A",
    feedback:
      "Dịch vụ chăm sóc cá Koi tại trung tâm rất tuyệt vời! Cá Koi của tôi đã được chăm sóc kỹ lưỡng và phục hồi nhanh chóng.",
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    key: "2",
    name: "Lê Thị B",
    feedback:
      "Trung tâm rất chuyên nghiệp, tôi hoàn toàn yên tâm giao cá Koi của mình cho các bác sĩ tại đây.",
    imgSrc: "https://via.placeholder.com/100",
  },
  {
    key: "3",
    name: "Trần Văn C",
    feedback:
      "Tôi rất ấn tượng với quy trình chăm sóc cá Koi tại trung tâm, đội ngũ nhân viên rất tận tâm và nhiệt tình.",
    imgSrc: "https://via.placeholder.com/100",
  },
];

const ServiceTestimonialsSection = () => {
  return (
    <div className="servicePage-testimonials-section">
      <h2 className="servicePage-testimonials-title">
        Đánh giá của khách hàng
      </h2>
      <Carousel autoplay>
        {testimonials.map((testimonial) => (
          <div key={testimonial.key} className="servicePage-testimonial-item">
            <Avatar
              size={100}
              src={testimonial.imgSrc}
              alt={testimonial.name}
            />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.feedback}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ServiceTestimonialsSection;
