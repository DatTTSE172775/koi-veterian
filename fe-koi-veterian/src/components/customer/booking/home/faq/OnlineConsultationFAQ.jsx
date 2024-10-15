import { Collapse } from "antd";
import "./OnlineConsultationFAQ.scss";

const { Panel } = Collapse;

const OnlineConsultationFAQ = () => {
  const faqs = [
    {
      question: "Cần chuẩn bị gì trước khi bác sĩ đến?",
      answer:
        "Bạn nên cung cấp thông tin chi tiết về tình trạng của cá, cũng như môi trường sống hiện tại của chúng. Đảm bảo rằng hồ cá sẵn sàng để bác sĩ có thể tiếp cận và kiểm tra.",
    },
    {
      question: "Chi phí điều trị bệnh cho cá là bao nhiêu?",
      answer:
        "Chi phí sẽ phụ thuộc vào tình trạng bệnh của cá và phương pháp điều trị được sử dụng. Vui lòng liên hệ với trung tâm để nhận báo giá chi tiết.",
    },
    {
      question: "Tôi có thể đặt dịch vụ điều trị tại nhà không?",
      answer:
        "Có, bạn hoàn toàn có thể yêu cầu dịch vụ điều trị tại nhà. Bác sĩ của chúng tôi sẽ đến tận nơi để kiểm tra và điều trị cho cá Koi của bạn.",
    },
    {
      question: "Thời gian phục hồi của cá sau khi điều trị là bao lâu?",
      answer:
        "Thời gian phục hồi phụ thuộc vào mức độ nghiêm trọng của bệnh. Tuy nhiên, thông thường cá Koi sẽ bắt đầu hồi phục sau 1-2 tuần.",
    },
    {
      question: "Dịch vụ điều trị bệnh có bảo hành không?",
      answer:
        "Chúng tôi cam kết theo dõi quá trình hồi phục của cá sau khi điều trị. Nếu có bất kỳ vấn đề gì phát sinh sau khi điều trị, vui lòng liên hệ với trung tâm để được hỗ trợ.",
    },
    {
      question: "Tôi có cần đưa cá đến trung tâm không?",
      answer:
        "Bạn có thể lựa chọn điều trị tại nhà hoặc đưa cá đến trung tâm của chúng tôi. Chúng tôi có đầy đủ các thiết bị và bác sĩ sẵn sàng điều trị cho cá tại trung tâm.",
    },
    {
      question: "Bác sĩ sẽ kê đơn thuốc không?",
      answer:
        "Tùy thuộc vào tình trạng của cá, bác sĩ có thể kê đơn thuốc để hỗ trợ quá trình hồi phục. Bạn sẽ nhận được hướng dẫn chi tiết về cách sử dụng thuốc sau khi điều trị.",
    },
    {
      question:
        "Tôi có thể liên hệ lại sau khi điều trị nếu cá không hồi phục tốt?",
      answer:
        "Chắc chắn. Chúng tôi luôn sẵn sàng hỗ trợ sau khi điều trị. Bạn có thể liên hệ với trung tâm để được tư vấn và hướng dẫn tiếp theo.",
    },
    {
      question: "Làm thế nào để đánh giá dịch vụ sau khi điều trị?",
      answer:
        "Sau khi dịch vụ hoàn tất, bạn sẽ nhận được biểu mẫu đánh giá qua email hoặc trên hệ thống của chúng tôi để cung cấp phản hồi về dịch vụ.",
    },
    {
      question: "Tôi có thể đặt lịch trước bao lâu?",
      answer:
        "Bạn có thể đặt lịch trước từ 1-2 tuần hoặc liên hệ với trung tâm để có được lịch hẹn phù hợp nhất với thời gian của bạn.",
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
