import Appointment from "../models/Appointment.js";

export const seedAppointment = async (req, res) => {
  try {
    await Appointment.deleteMany({});
    await Appointment.create([
      {
        title: "Project Kickoff",
        type: "Business Meeting",
        purpose: "Discuss project requirements",
        company: "Enovec Pte Ltd",
        personMeetingWith: "Chris",
        address:
          "10 Ubi Crescent, #07-36, Ubi TechPark. Lobby C Singapore, 408564",
        date: "2025-06-15",
        time: "10:00 AM",
        comments: "Bring project proposal documents",
      },
      {
        title: "Client Review",
        type: "Client Call",
        purpose: "Review quarterly results",
        company: "Global Solutions",
        personMeetingWith: "Alex",
        address: "ALEXANDRA TECHNOPARK building",
        date: "2025-06-20",
        time: "2:30 PM",
        comments: "Prepare analytics report",
      },
      {
        title: "Dental Checkup",
        type: "Medical",
        purpose: "Routine dental cleaning",
        company: "Smile Dental Clinic",
        personMeetingWith: "Dr. Lee",
        address: "231 East Coast Road, Singapore 428927",
        date: "2025-06-25",
        time: "9:00 AM",
        comments: "Arrive 10 minutes early",
      },
    ]);

    res.json({ status: "ok", msg: "seeding successful" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "seeding error" });
  }
};

export const getAllAppointment = async (req, res) => {
  try {
    const allAppointment = await Appointment.find();
    res.json(allAppointment);
  } catch (error) {
    console.error(error.message);
    res.json({ status: "error", msg: "error getting all appointments" });
  }
};

export const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.body._id);
    res.json(appointment);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error getting appointment" });
  }
};

export const addNewAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment({
      title: req.body.title,
      type: req.body.type,
      purpose: req.body.purpose,
      company: req.body.company,
      personMeetingWith: req.body.personMeetingWith,
      address: req.body.address,
      date: req.body.date,
      time: req.body.time,
      comments: req.body.comments,
    });
    await newAppointment.save();

    res.json({ status: "ok", msg: "appointment saved" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ status: "error", msg: "error saving appointment" });
  }
};

export const deleteAppointmentById = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ status: "ok", msg: "appointment deleted" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "error deleting appointment" });
  }
};

export const updateOneAppointment = async (req, res) => {
  try {
    const updatedAppointment = {};
    if ("title" in req.body) updatedAppointment.title = req.body.title;
    if ("type" in req.body) updatedAppointment.type = req.body.type;
    if ("purpose" in req.body) updatedAppointment.purpose = req.body.purpose;
    if ("company" in req.body) updatedAppointment.company = req.body.company;
    if ("personMeetingWith" in req.body)
      updatedAppointment.personMeetingWith = req.body.personMeetingWith;
    if ("address" in req.body) updatedAppointment.address = req.body.address;
    if ("date" in req.body) updatedAppointment.date = req.body.date;
    if ("time" in req.body) updatedAppointment.time = req.body.time;
    if ("comments" in req.body) updatedAppointment.comments = req.body.comments;

    await Appointment.findByIdAndUpdate(req.params.id, updatedAppointment);
    res.json({ status: "ok", msg: "appointment updated" });
  } catch (error) {
    console.error(error.message);
    res
      .status(400)
      .json({ status: "error", msg: "error updating appointment" });
  }
};
