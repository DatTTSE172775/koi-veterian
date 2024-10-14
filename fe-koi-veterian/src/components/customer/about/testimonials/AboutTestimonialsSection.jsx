import { Avatar, Carousel } from "antd";
import "./AboutTestimonialsSection.scss"; // Thêm file CSS riêng cho component này

const testimonials = [
  {
    key: "1",
    name: "Nguyễn Văn D",
    feedback:
      "Dịch vụ chăm sóc cá Koi tuyệt vời! Các bác sĩ rất tận tâm và chuyên nghiệp, cá Koi của tôi khỏe mạnh hơn rất nhiều sau khi được điều trị.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    key: "2",
    name: "Lê Thị E",
    feedback:
      "Trung tâm Thú y Cá Koi đã giúp cá Koi của tôi hồi phục sau một căn bệnh khó chữa. Tôi rất hài lòng với dịch vụ tại đây.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    key: "3",
    name: "Trần Văn F",
    feedback:
      "Tôi đã sử dụng dịch vụ khám tại nhà và rất ấn tượng với sự chuyên nghiệp và tận tâm của các bác sĩ. Sẽ tiếp tục sử dụng dịch vụ của trung tâm.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
];

const AboutTestimonialsSection = () => {
  return (
    <div className="aboutPage-testimonials-section">
      <h2 className="aboutPage-testimonials-title">
        Đánh giá và Câu chuyện của Khách hàng
      </h2>
      <Carousel autoplay>
        {testimonials.map((testimonial) => (
          <div key={testimonial.key} className="aboutPage-testimonial-item">
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

export default AboutTestimonialsSection;
