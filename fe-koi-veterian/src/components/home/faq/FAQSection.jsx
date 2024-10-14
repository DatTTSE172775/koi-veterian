import { Collapse } from "antd";
import "./FAQSection.scss";

const { Panel } = Collapse;

const faqs = [
  {
    key: "1",
    question: "Trung tâm cung cấp những dịch vụ gì?",
    answer:
      "Chúng tôi cung cấp các dịch vụ tư vấn trực tuyến, khám tại nhà và điều trị tại trung tâm cho cá Koi.",
  },
  {
    key: "2",
    question: "Tôi có thể đặt lịch khám tại nhà cho cá Koi không?",
    answer:
      "Có, bạn có thể đặt lịch khám tại nhà thông qua hệ thống của chúng tôi. Các bác sĩ sẽ đến tận nơi để kiểm tra sức khỏe cho cá Koi của bạn.",
  },
  {
    key: "3",
    question: "Trung tâm có đội ngũ bác sĩ chuyên khoa về cá Koi không?",
    answer:
      "Chúng tôi có đội ngũ bác sĩ thú y giàu kinh nghiệm và chuyên môn cao trong việc chăm sóc và điều trị cá Koi.",
  },
];

const FAQSection = () => {
  return (
    <div className="faq-section">
      <h2>Câu hỏi thường gặp</h2>
      <Collapse accordion>
        {faqs.map((faq) => (
          <Panel header={faq.question} key={faq.key}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQSection;
