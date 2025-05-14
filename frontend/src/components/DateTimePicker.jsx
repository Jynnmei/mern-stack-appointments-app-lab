import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Appt.module.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const DateTimePicker = (props) => {
  console.log("Current TimePicker value:", props.selectedTime);

  const formatTime = (timeStr) => {
    const time = new Date(`1990-01-01T${timeStr}:00`);
    return time
      .toLocaleTimeString("en-SG", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
      .toUpperCase();
  };

  const handleTimeChange = (value) => {
    const formatted = formatTime(value);
    props.setSelectedTime(formatted);
  };

  return (
    <>
      <div className={styles.date}>
        <DatePicker
          selected={props.selectedDate}
          onChange={(date) => props.setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select date"
          className="form-control"
        />
      </div>

      <div className={styles.time}>
        <TimePicker
          onChange={handleTimeChange}
          value={props.selectedTime}
          disableClock={true}
          clearIcon={null}
          format="hh:mm a"
        />
      </div>
    </>
  );
};

export default DateTimePicker;
