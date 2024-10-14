import { Button, Carousel } from "antd";
import "./HeroSection.scss";

const HeroSection = () => {
  const carouselItems = [
    {
      key: "1",
      title: "Chào mừng đến với Trung tâm Dịch vụ Thú y Cá Koi",
      description: "Chăm sóc tốt nhất cho cá Koi của bạn!",
      buttonText: "Đặt lịch ngay",
      imgSrc: "https://placehold.co/600x400/png",
    },
    {
      key: "2",
      title: "Chuyên gia về chăm sóc và điều trị cá Koi",
      description: "Khám phá các dịch vụ chất lượng cao của chúng tôi.",
      buttonText: "Xem dịch vụ",
      imgSrc: "https://placehold.co/600x400/png",
    },
    {
      key: "3",
      title: "Bảo vệ sức khỏe cá Koi với chuyên môn hàng đầu",
      description: "Liên hệ để được tư vấn ngay.",
      buttonText: "Liên hệ chúng tôi",
      imgSrc: "https://placehold.co/600x400/png",
    },
  ];

  return (
    <div className="hero-section">
      <Carousel autoplay>
        {carouselItems.map((item) => (
          <div key={item.key} className="carousel-item">
            <div className="carousel-content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Button type="primary" size="large">
                {item.buttonText}
              </Button>
            </div>
            <div className="carousel-image">
              <img src={item.imgSrc} alt={item.title} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
