import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Appt.module.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const DateTimePicker = (props) => {
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
          onChange={props.setSelectedTime}
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
