import { Timeline } from "antd";
import "./AboutHistorySection.scss"; // Thêm file CSS riêng cho component này

const historyData = [
  {
    year: "2005",
    title: "Thành lập Trung tâm",
    description:
      "Trung tâm Thú y Cá Koi được thành lập với sứ mệnh chăm sóc và điều trị cho cá Koi.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    year: "2010",
    title: "Mở rộng dịch vụ khám tại nhà",
    description:
      "Trung tâm đã mở rộng dịch vụ khám tại nhà để đáp ứng nhu cầu ngày càng cao của khách hàng.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    year: "2015",
    title: "Chứng nhận quốc tế",
    description:
      "Trung tâm đạt được chứng nhận quốc tế về chăm sóc và điều trị cá Koi, khẳng định chất lượng dịch vụ.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
  {
    year: "2021",
    title: "Mở rộng cơ sở mới",
    description:
      "Trung tâm mở thêm cơ sở mới với trang thiết bị hiện đại, phục vụ chăm sóc chuyên sâu cho cá Koi.",
    imgSrc: "https://via.placeholder.com/100", // Placeholder image
  },
];

const AboutHistorySection = () => {
  return (
    <div className="aboutPage-history-section">
      <h2 className="aboutPage-history-title">Lịch sử của Trung tâm</h2>
      <Timeline className="aboutPage-timeline">
        {historyData.map((item, index) => (
          <Timeline.Item key={index}>
            <div className="aboutPage-timeline-item">
              <div className="aboutPage-timeline-item-img">
                <img src={item.imgSrc} alt={item.title} />
              </div>
              <div className="aboutPage-timeline-item-content">
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default AboutHistorySection;
