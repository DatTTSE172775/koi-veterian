import { Collapse } from "antd";
import "./ServiceFAQSection.scss";

const { Panel } = Collapse;

const faqs = [
  {
    key: "1",
    question: "Quy trình khám tại trung tâm như thế nào?",
    answer:
      "Quy trình bắt đầu với việc đặt lịch hẹn, sau đó cá Koi của bạn sẽ được kiểm tra tổng quát bởi các bác sĩ chuyên khoa.",
  },
  {
    key: "2",
    question: "Thời gian phục hồi của cá Koi sau khi điều trị là bao lâu?",
    answer:
      "Thời gian phục hồi phụ thuộc vào tình trạng bệnh của cá Koi, thường mất khoảng 1-2 tuần để hồi phục hoàn toàn.",
  },
  {
    key: "3",
    question: "Cách thức đặt lịch hẹn như thế nào?",
    answer:
      "Bạn có thể đặt lịch hẹn qua website của trung tâm hoặc liên hệ trực tiếp qua số điện thoại hotline để được hỗ trợ.",
  },
  {
    key: "4",
    question: "Chi phí dịch vụ điều trị tại trung tâm là bao nhiêu?",
    answer:
      "Chi phí sẽ phụ thuộc vào loại dịch vụ mà bạn chọn. Vui lòng liên hệ để biết thêm chi tiết và nhận báo giá.",
  },
];

const ServiceFAQSection = () => {
  return (
    <div className="servicePage-faq-section">
      <h2 className="servicePage-faq-title">Câu hỏi Thường Gặp</h2>
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

export default ServiceFAQSection;
