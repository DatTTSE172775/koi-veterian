import { Avatar, Carousel } from "antd";
import "./TestimonialsSection.scss";

const testimonials = [
  {
    key: "1",
    name: "Nguyễn Văn D",
    feedback:
      "Dịch vụ chăm sóc cá Koi tuyệt vời! Các bác sĩ rất tận tâm và chuyên nghiệp, cá Koi của tôi khỏe hơn rất nhiều.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    key: "2",
    name: "Lê Thị E",
    feedback:
      "Trung tâm có đội ngũ bác sĩ giỏi và rất hiểu biết về cá Koi. Tôi rất yên tâm khi đưa cá đến đây.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    key: "3",
    name: "Trần Văn F",
    feedback:
      "Dịch vụ tuyệt vời và chuyên nghiệp! Tôi sẽ tiếp tục sử dụng dịch vụ của trung tâm cho cá Koi của mình.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    key: "4",
    name: "Nguyễn Văn D",
    feedback:
      "Dịch vụ chăm sóc cá Koi tuyệt vời! Các bác sĩ rất tận tâm và chuyên nghiệp, cá Koi của tôi khỏe hơn rất nhiều.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    key: "5",
    name: "Lê Thị E",
    feedback:
      "Trung tâm có đội ngũ bác sĩ giỏi và rất hiểu biết về cá Koi. Tôi rất yên tâm khi đưa cá đến đây.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    key: "6",
    name: "Trần Văn F",
    feedback:
      "Dịch vụ tuyệt vời và chuyên nghiệp! Tôi sẽ tiếp tục sử dụng dịch vụ của trung tâm cho cá Koi của mình.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
];

const TestimonialsSection = () => {
  return (
    <div className="testimonials-section">
      <h2>Đánh giá của khách hàng</h2>
      <Carousel autoplay>
        {testimonials.map((testimonial) => (
          <div key={testimonial.key} className="testimonial-item">
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

export default TestimonialsSection;
