import { Collapse, Typography } from "antd";

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const FAQPage = () => {
  const faqs = [
    {
      question: "Làm thế nào để đặt lịch tư vấn trực tuyến?",
      answer:
        "Bạn có thể đặt lịch tư vấn trực tuyến thông qua trang web của chúng tôi hoặc gọi điện trực tiếp đến số hotline. Chúng tôi sẽ sắp xếp một bác sĩ thú y phù hợp để tư vấn cho bạn trong thời gian sớm nhất.",
    },
    {
      question: "Các dấu hiệu cho thấy cá Koi bị bệnh?",
      answer:
        "Một số dấu hiệu phổ biến bao gồm: thay đổi màu sắc, mất cân bằng khi bơi, giảm ăn, vảy bị tổn thương, hoặc có các đốm trắng trên cơ thể. Nếu bạn nhận thấy bất kỳ dấu hiệu bất thường nào, hãy liên hệ với chúng tôi ngay để được tư vấn.",
    },
    {
      question: "Tần suất kiểm tra sức khỏe định kỳ cho cá Koi là bao lâu?",
      answer:
        "Chúng tôi khuyến nghị kiểm tra sức khỏe định kỳ cho cá Koi ít nhất 2 lần một năm. Tuy nhiên, tần suất có thể thay đổi tùy thuộc vào tuổi, kích thước hồ, và tình trạng sức khỏe của cá.",
    },
    {
      question: "Làm thế nào để cải thiện chất lượng nước trong hồ cá Koi?",
      answer:
        "Để cải thiện chất lượng nước, bạn nên: thường xuyên thay nước, sử dụng hệ thống lọc hiệu quả, kiểm tra và cân bằng các chỉ số nước (pH, ammonia, nitrite), và không cho cá ăn quá nhiều. Nếu bạn cần hỗ trợ chi tiết, hãy đặt lịch đánh giá hồ cá tại nhà với chúng tôi.",
    },
    {
      question: "Các loại thức ăn tốt nhất cho cá Koi?",
      answer:
        "Cá Koi cần một chế độ ăn cân bằng bao gồm protein, chất béo, vitamin, và khoáng chất. Thức ăn viên chất lượng cao dành riêng cho cá Koi là lựa chọn tốt nhất. Bạn cũng có thể bổ sung thêm rau xanh và trái cây tươi như dưa chuột hoặc cam. Hãy tham khảo ý kiến bác sĩ thú y của chúng tôi để có chế độ ăn phù hợp nhất cho cá Koi của bạn.",
    },
  ];

  return (
    <div>
      <Title level={1}>Câu Hỏi Thường Gặp</Title>
      <Paragraph>
        Dưới đây là một số câu hỏi thường gặp về chăm sóc cá Koi. Nếu bạn không
        tìm thấy câu trả lời cho thắc mắc của mình, đừng ngần ngại liên hệ với
        chúng tôi để được hỗ trợ.
      </Paragraph>

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

export default FAQPage;
