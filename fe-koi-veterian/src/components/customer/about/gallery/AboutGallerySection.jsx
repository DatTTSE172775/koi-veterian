import { Col, Row } from "antd";
import "./AboutGallerySection.scss";

const galleryItems = [
  {
    key: "1",
    type: "image",
    src: "https://via.placeholder.com/400x300",
    alt: "Hình ảnh cơ sở vật chất",
  },
  {
    key: "2",
    type: "image",
    src: "https://via.placeholder.com/400x300",
    alt: "Sự kiện tại trung tâm",
  },
  {
    key: "3",
    type: "image",
    src: "https://via.placeholder.com/400x300",
    alt: "Chăm sóc cá Koi",
  },
  {
    key: "4",
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    alt: "Video giới thiệu trung tâm",
  },
];

const AboutGallerySection = () => {
  return (
    <div className="aboutPage-gallery-section">
      <h2 className="aboutPage-gallery-title">Thư viện Hình ảnh và Video</h2>
      <Row gutter={[16, 16]}>
        {galleryItems.map((item) => (
          <Col xs={24} sm={12} md={6} key={item.key}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt}
                className="aboutPage-gallery-item"
              />
            ) : (
              <video controls className="aboutPage-gallery-item">
                <source src={item.src} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutGallerySection;
