import { Collapse } from "antd";
import "./OnlineConsultationFAQ.scss";

const { Panel } = Collapse;

const OnlineConsultationFAQ = () => {
  const faqs = [
    {
      question: "Chi phí cho một buổi tư vấn trực tuyến là bao nhiêu?",
      answer:
        "Chi phí cho mỗi buổi tư vấn trực tuyến phụ thuộc vào thời gian tư vấn và chuyên môn của bác sĩ. Vui lòng liên hệ với trung tâm để biết thêm chi tiết.",
    },
    {
      question: "Làm sao tôi có thể đặt lịch tư vấn trực tuyến?",
      answer:
        "Bạn có thể đặt lịch tư vấn trực tuyến thông qua website của chúng tôi hoặc liên hệ qua số điện thoại để được hỗ trợ đặt lịch.",
    },
    {
      question: "Thời gian tư vấn trung bình là bao lâu?",
      answer:
        "Thời gian tư vấn trung bình cho mỗi buổi là khoảng 30-60 phút, tùy thuộc vào tình trạng của cá và các vấn đề bạn cần tư vấn.",
    },
    {
      question: "Tôi có thể chọn bác sĩ tư vấn không?",
      answer:
        "Bạn có thể chọn bác sĩ tư vấn theo mong muốn của mình. Nếu không, chúng tôi sẽ phân công bác sĩ phù hợp với yêu cầu của bạn.",
    },
    {
      question: "Tôi cần chuẩn bị gì trước khi tư vấn trực tuyến?",
      answer:
        "Bạn chỉ cần cung cấp đầy đủ thông tin về tình trạng của cá và các vấn đề cần tư vấn. Ngoài ra, đảm bảo bạn có kết nối internet ổn định để thực hiện tư vấn trực tuyến.",
    },
    {
      question: "Tôi có thể hủy lịch hẹn không?",
      answer:
        "Bạn có thể hủy lịch hẹn miễn phí nếu thông báo trước ít nhất 24 giờ. Vui lòng liên hệ với trung tâm để được hỗ trợ.",
    },
    {
      question: "Làm thế nào để đánh giá bác sĩ sau khi tư vấn?",
      answer:
        "Sau khi buổi tư vấn kết thúc, bạn sẽ nhận được một biểu mẫu đánh giá. Bạn có thể đánh giá chất lượng dịch vụ và bác sĩ tư vấn thông qua biểu mẫu này.",
    },
    {
      question: "Dịch vụ tư vấn trực tuyến có bảo mật không?",
      answer:
        "Chúng tôi cam kết bảo mật mọi thông tin cá nhân và nội dung tư vấn của khách hàng. Hệ thống của chúng tôi tuân thủ các tiêu chuẩn bảo mật cao nhất.",
    },
    {
      question: "Tôi có thể sử dụng điện thoại để tư vấn trực tuyến không?",
      answer:
        "Bạn có thể sử dụng máy tính, máy tính bảng, hoặc điện thoại thông minh để tham gia buổi tư vấn trực tuyến, miễn là thiết bị của bạn có kết nối internet.",
    },
    {
      question: "Tôi cần làm gì sau buổi tư vấn?",
      answer:
        "Sau buổi tư vấn, nếu cần, bạn sẽ nhận được hướng dẫn chi tiết về các bước chăm sóc hoặc điều trị tiếp theo cho cá Koi của mình.",
    },
  ];

  return (
    <div className="onlineBookingPage-faq">
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

export default OnlineConsultationFAQ;
