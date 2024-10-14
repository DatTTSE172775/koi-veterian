import { Collapse } from "antd";
import "./FAQSection.scss";

const { Panel } = Collapse;

const faqs = [
  {
    key: "1",
    question: "Quy trình đặt lịch hẹn như thế nào?",
    answer:
      "Quy trình đặt lịch hẹn rất đơn giản. Bạn chỉ cần chọn dịch vụ, chọn bác sĩ, chọn thời gian và xác nhận.",
  },
  {
    key: "2",
    question: "Chi phí cho các dịch vụ là bao nhiêu?",
    answer:
      "Chi phí sẽ tùy thuộc vào loại dịch vụ và bác sĩ bạn chọn. Bạn có thể liên hệ để biết thêm chi tiết.",
  },
  {
    key: "3",
    question: "Tôi có thể đặt dịch vụ tại nhà không?",
    answer:
      "Có, trung tâm cung cấp dịch vụ kiểm tra và điều trị tại nhà với bác sĩ chuyên khoa.",
  },
  {
    key: "4",
    question: "Làm thế nào để liên hệ với trung tâm?",
    answer:
      "Bạn có thể liên hệ với chúng tôi qua hotline, email, hoặc thông qua form liên hệ trên trang web.",
  },
];

const FAQSection = () => {
  return (
    <div className="supportPage-faq-section">
      <h2 className="supportPage-faq-title">Câu hỏi thường gặp</h2>
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
