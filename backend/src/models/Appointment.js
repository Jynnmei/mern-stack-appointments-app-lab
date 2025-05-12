import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    type: { type: String, required: true },
    purpose: { type: String, required: true },
    company: { type: String, required: true },
    personMeetingWith: { type: String, required: true },
    address: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    comments: { type: String, required: true },
  },
  { collection: "appointment" }
);

export default mongoose.model("Appointment", AppointmentSchema);
