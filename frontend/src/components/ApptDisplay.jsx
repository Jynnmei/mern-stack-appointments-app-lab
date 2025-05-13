import React, { useEffect, useRef, useState } from "react";
import Appt from "./Appt.jsx";
import useFetch from "../hooks/useFetch.jsx";
import DateTimePicker from "./DateTimePicker.jsx";

const ApptDisplay = () => {
  const [appt, setAppt] = useState([]);
  const fetchData = useFetch();

  const titleRef = useRef();
  const typeRef = useRef();
  const purposeRef = useRef();
  const companyRef = useRef();
  const personMeetingWithRef = useRef();
  const addressRef = useRef();
  const commentsRef = useRef();

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const getAppt = async () => {
    const res = await fetchData("/api/appointment", undefined, undefined);

    if (res.ok) {
      setAppt(res.data);
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  const addAppt = async () => {
    const res = await fetchData("/api/appointment", "PUT", {
      title: titleRef.current.value,
      type: typeRef.current.value,
      purpose: purposeRef.current.value,
      company: companyRef.current.value,
      personMeetingWith: personMeetingWithRef.current.value,
      address: addressRef.current.value,
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
      comments: commentsRef.current.value,
    });

    if (res.ok) {
      titleRef.current.value = "";
      typeRef.current.value = "";
      purposeRef.current.value = "";
      companyRef.current.value = "";
      personMeetingWithRef.current.value = "";
      addressRef.current.value = "";
      commentsRef.current.value = "";

      setSelectedDate("");
      setSelectedTime("");
      getAppt();
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  const deleteAppt = async (id) => {
    console.log("Deleting appointment with ID:", id);
    const res = await fetchData("/api/appointment/" + id, "DELETE", undefined);

    if (res.ok) {
      getAppt();
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  useEffect(() => {
    getAppt();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-md-6">Appointment List</h1>
      </div>

      <div className="row">
        <input
          type="text"
          ref={titleRef}
          placeholder="title"
          className="col-md-4"
        />
        <input
          type="text"
          ref={typeRef}
          placeholder="type"
          className="col-md-4"
        />
        <input
          type="text"
          ref={purposeRef}
          placeholder="purpose"
          className="col-md-4"
        />
        <input
          type="text"
          ref={companyRef}
          placeholder="company"
          className="col-md-4"
        />

        <input
          type="text"
          ref={personMeetingWithRef}
          placeholder="personMeetingWith"
          className="col-md-4"
        />

        <input
          type="text"
          ref={addressRef}
          placeholder="address"
          className="col-md-4"
        />

        <input
          type="text"
          ref={commentsRef}
          placeholder="comments"
          className="col-md-4"
        />

        <div className="row">
          <div className="col-md-12">
            <DateTimePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />
          </div>
        </div>

        <button className="col-md-4" onClick={addAppt}>
          add
        </button>
      </div>

      <br />
      <br />

      {appt.map((item) => {
        return (
          <Appt
            key={item._id}
            id={item._id}
            title={item.title}
            type={item.type}
            purpose={item.purpose}
            company={item.company}
            personMeetingWith={item.personMeetingWith}
            address={item.address}
            date={item.date}
            time={item.time}
            comments={item.comments}
            deleteAppt={deleteAppt}
            getAppt={getAppt}
          />
        );
      })}
    </div>
  );
};

export default ApptDisplay;
