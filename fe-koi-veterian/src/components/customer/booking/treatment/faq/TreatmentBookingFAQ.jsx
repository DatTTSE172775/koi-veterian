import { Collapse } from "antd";
import "./TreatmentBookingFAQ.scss";

const { Panel } = Collapse;

const TreatmentBookingFAQ = () => {
  const faqs = [
    {
      question: "Làm thế nào để biết cá cần điều trị?",
      answer:
        "Cá Koi có thể có các dấu hiệu như thở khó, xuất hiện các vết loét, hoặc mất màu sắc. Khi có dấu hiệu này, bạn nên liên hệ với trung tâm để được tư vấn.",
    },
    {
      question: "Dịch vụ có bao gồm kê đơn thuốc không?",
      answer:
        "Có, nếu cá cần sử dụng thuốc, bác sĩ sẽ kê đơn thuốc và hướng dẫn bạn cách sử dụng đúng cách.",
    },
    {
      question: "Tôi có thể yêu cầu điều trị tại nhà không?",
      answer:
        "Có, chúng tôi cung cấp dịch vụ điều trị tại nhà nếu bạn muốn, hoặc bạn có thể đưa cá đến trung tâm để điều trị.",
    },
    {
      question: "Thời gian phục hồi sau điều trị là bao lâu?",
      answer:
        "Thời gian phục hồi sẽ phụ thuộc vào tình trạng bệnh của cá, thông thường cá sẽ phục hồi sau 1-2 tuần.",
    },
    {
      question: "Có cần chuẩn bị gì trước khi bác sĩ đến?",
      answer:
        "Bạn chỉ cần đảm bảo rằng cá Koi được đặt ở môi trường dễ tiếp cận để bác sĩ kiểm tra và điều trị.",
    },
    {
      question: "Chi phí điều trị bệnh cho cá là bao nhiêu?",
      answer:
        "Chi phí phụ thuộc vào tình trạng của cá và các phương pháp điều trị cần thiết. Vui lòng liên hệ trung tâm để được báo giá cụ thể.",
    },
    {
      question: "Tôi có thể liên hệ lại sau khi điều trị nếu có vấn đề?",
      answer:
        "Chắc chắn. Chúng tôi luôn sẵn sàng hỗ trợ sau điều trị. Bạn có thể liên hệ với trung tâm để nhận tư vấn và hỗ trợ tiếp tục.",
    },
    {
      question: "Bác sĩ sẽ đến điều trị vào thời gian nào?",
      answer:
        "Bạn có thể chọn thời gian phù hợp khi đặt lịch. Chúng tôi sẽ sắp xếp bác sĩ theo thời gian bạn yêu cầu.",
    },
    {
      question: "Có dịch vụ điều trị khẩn cấp không?",
      answer:
        "Có, trung tâm có cung cấp dịch vụ điều trị khẩn cấp nếu cá Koi của bạn gặp tình trạng nghiêm trọng.",
    },
    {
      question: "Làm thế nào để đặt lịch nhanh chóng?",
      answer:
        "Bạn có thể đặt lịch qua website hoặc liên hệ trực tiếp với trung tâm qua số điện thoại hoặc email để được hỗ trợ nhanh chóng.",
    },
  ];

  return (
    <div className="treatmentBookingPage-faq">
      <h2>Câu hỏi thường gặp</h2>
      <Collapse accordion>
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default TreatmentBookingFAQ;
