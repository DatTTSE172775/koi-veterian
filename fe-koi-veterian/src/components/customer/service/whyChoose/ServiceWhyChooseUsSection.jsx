import "./ServiceWhyChooseUsSection.scss";

const reasons = [
  {
    key: "1",
    title: "Đội ngũ chuyên gia giàu kinh nghiệm",
    description:
      "Chúng tôi có đội ngũ bác sĩ thú y giàu kinh nghiệm và tận tâm trong việc chăm sóc và điều trị cá Koi.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "2",
    title: "Cơ sở vật chất hiện đại",
    description:
      "Trung tâm của chúng tôi được trang bị các thiết bị tiên tiến để đảm bảo dịch vụ tốt nhất cho cá Koi.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    key: "3",
    title: "Chứng nhận chất lượng",
    description:
      "Chúng tôi đạt được nhiều chứng nhận quốc tế về chăm sóc và điều trị cá Koi, đảm bảo tiêu chuẩn cao nhất.",
    imgSrc: "https://via.placeholder.com/150", // Placeholder image
  },
];

const ServiceWhyChooseUsSection = () => {
  return (
    <div className="servicePage-whychoose-section">
      <h2 className="servicePage-whychoose-title">Tại sao chọn chúng tôi?</h2>
      <div className="servicePage-whychoose-items">
        {reasons.map((reason) => (
          <div key={reason.key} className="servicePage-whychoose-item">
            <img src={reason.imgSrc} alt={reason.title} />
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceWhyChooseUsSection;
