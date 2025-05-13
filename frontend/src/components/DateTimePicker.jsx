import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Appt.module.css";

const DateTimePicker = (props) => {
  return (
    <>
      <div className={styles.date}>
        <div className="col-md-3">
          <DatePicker
            selected={props.selectedDate}
            onChange={(date) => props.setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select date"
            className="form-control"
          />
        </div>
      </div>

      <div className={styles.time}>
        <div className="col-md-2">
          <input
            type="time"
            value={props.selectedTime}
            onChange={(e) => props.setSelectedTime(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
    </>
  );
};

export default DateTimePicker;
