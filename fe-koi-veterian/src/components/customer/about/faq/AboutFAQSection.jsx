import { Collapse } from "antd";
import "./AboutFAQSection.scss";

const { Panel } = Collapse;

const faqs = [
  {
    key: "1",
    question: "Trung tâm được thành lập như thế nào?",
    answer:
      "Trung tâm Thú y Cá Koi được thành lập vào năm 2005 với mục tiêu cung cấp dịch vụ chăm sóc và điều trị cá Koi hàng đầu tại Việt Nam.",
  },
  {
    key: "2",
    question:
      "Điều gì làm trung tâm của chúng tôi đặc biệt trong việc chăm sóc cá Koi?",
    answer:
      "Chúng tôi có đội ngũ bác sĩ thú y giàu kinh nghiệm, cùng với trang thiết bị hiện đại và các dịch vụ chăm sóc đặc biệt dành cho cá Koi.",
  },
  {
    key: "3",
    question: "Làm sao để đặt lịch hẹn với trung tâm?",
    answer:
      "Bạn có thể liên hệ với chúng tôi qua trang web hoặc số điện thoại để đặt lịch hẹn tư vấn và chăm sóc cá Koi.",
  },
];

const AboutFAQSection = () => {
  return (
    <div className="aboutPage-faq-section">
      <h2 className="aboutPage-faq-title">Câu hỏi Thường Gặp</h2>
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

export default AboutFAQSection;
