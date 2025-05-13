import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useFetch from "../hooks/useFetch";
import styles from "./Modal.module.css";

const OverLay = (props) => {
  const fetchData = useFetch();
  const titleRef = useRef("");
  const typeRef = useRef("");
  const purposeRef = useRef("");
  const companyRef = useRef("");
  const personMeetingWithRef = useRef("");
  const addressRef = useRef("");
  const dateRef = useRef("");
  const timeRef = useRef("");
  const commentsRef = useRef("");

  const updateAppt = async (id) => {
    const res = await fetchData("/api/appointment/" + id, "PATCH", {
      title: titleRef.current.value,
      type: typeRef.current.value,
      purpose: purposeRef.current.value,
      company: companyRef.current.value,
      personMeetingWith: personMeetingWithRef.current.value,
      address: addressRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      comments: commentsRef.current.value,
    });

    if (res.ok) {
      props.getAppt();
      props.setShowUpdateModal(false);
    } else {
      alert(JSON.stringify(res.data));
      console.log(res.data);
    }
  };

  useEffect(() => {
    console.log("UpdateModal loaded with props:", props);

    titleRef.current.value = props.title;
    typeRef.current.value = props.type;
    purposeRef.current.value = props.purpose;
    companyRef.current.value = props.company;
    personMeetingWithRef.current.value = props.personMeetingWith;
    addressRef.current.value = props.address;
    dateRef.current.value = props.date;
    timeRef.current.value = props.time;
    commentsRef.current.value = props.comments;
  }, [props]);

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Title</div>
          <input ref={titleRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Type</div>
          <input ref={typeRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Purpose</div>
          <input ref={purposeRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Company</div>
          <input ref={companyRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Person Meeting With</div>
          <input ref={personMeetingWithRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Address</div>
          <input ref={addressRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Date</div>
          <input ref={dateRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Time</div>
          <input ref={timeRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Comments</div>
          <input ref={commentsRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <button onClick={() => updateAppt(props.id)} className="col-md-3">
            update
          </button>
          <button
            onClick={() => props.setShowUpdateModal(false)}
            className="col-md-3"
          >
            cancel
          </button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          id={props.id}
          title={props.title}
          type={props.type}
          purpose={props.purpose}
          company={props.company}
          personMeetingWith={props.personMeetingWith}
          address={props.address}
          date={props.date}
          time={props.time}
          comments={props.comments}
          setShowUpdateModal={props.setShowUpdateModal}
          getAppt={props.getAppt}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateModal;
