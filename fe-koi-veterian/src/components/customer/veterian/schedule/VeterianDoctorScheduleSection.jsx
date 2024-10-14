import { Badge, Calendar, Card } from "antd";
import { useState } from "react";
import "./VeterianDoctorScheduleSection.scss";

const doctorSchedules = [
  {
    key: "1",
    doctor: "Dr. Nguyễn Văn A",
    availableSlots: [
      { date: "2024-10-15", time: "09:00 - 11:00" },
      { date: "2024-10-16", time: "13:00 - 15:00" },
    ],
  },
  {
    key: "2",
    doctor: "Dr. Trần Thị B",
    availableSlots: [
      { date: "2024-10-15", time: "10:00 - 12:00" },
      { date: "2024-10-17", time: "14:00 - 16:00" },
    ],
  },
  {
    key: "3",
    doctor: "Dr. Phạm Văn C",
    availableSlots: [
      { date: "2024-10-16", time: "08:00 - 10:00" },
      { date: "2024-10-18", time: "09:00 - 11:00" },
    ],
  },
];

const VeterianDoctorScheduleSection = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const dateCellRender = (value) => {
    const formattedDate = value.format("YYYY-MM-DD");
    const slots = doctorSchedules
      .map((doctor) =>
        doctor.availableSlots.find((slot) => slot.date === formattedDate)
      )
      .filter(Boolean);

    return (
      <ul className="events">
        {slots.map((slot, index) => (
          <li key={index}>
            <Badge status="success" text={`${slot.time}`} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="veterianPage-schedule-section">
      <h2 className="veterianPage-schedule-title">Lịch làm việc của bác sĩ</h2>
      <Calendar dateCellRender={dateCellRender} onSelect={setSelectedDate} />
      <div className="veterianPage-schedule-details">
        {selectedDate ? (
          <>
            <h3>Lịch làm việc ngày {selectedDate.format("YYYY-MM-DD")}</h3>
            <div className="veterianPage-doctor-schedule-cards">
              {doctorSchedules.map((doctor) => {
                const slots = doctor.availableSlots.filter(
                  (slot) => slot.date === selectedDate.format("YYYY-MM-DD")
                );
                if (slots.length > 0) {
                  return (
                    <Card
                      key={doctor.key}
                      className="veterianPage-doctor-schedule-card"
                    >
                      <h4>{doctor.doctor}</h4>
                      <p>Thời gian khả dụng:</p>
                      <ul>
                        {slots.map((slot, index) => (
                          <li key={index}>{slot.time}</li>
                        ))}
                      </ul>
                    </Card>
                  );
                }
                return null;
              })}
            </div>
          </>
        ) : (
          <p>Vui lòng chọn ngày để xem lịch làm việc của bác sĩ.</p>
        )}
      </div>
    </div>
  );
};

export default VeterianDoctorScheduleSection;
