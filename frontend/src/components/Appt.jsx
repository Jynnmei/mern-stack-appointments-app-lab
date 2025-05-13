import React, { useState } from "react";
import UpdateModal from "./UpdateModal.jsx";
import styles from "./Appt.module.css";

const Appt = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB");
  };

  return (
    <>
      {showUpdateModal && (
        <UpdateModal
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
          setShowUpdateModal={setShowUpdateModal}
          getAppt={props.getAppt}
        />
      )}

      <div className={styles.apptCard}>
        <div className={styles.apptHeader}>
          <div className={styles.apptTitle}>
            <strong>{props.title}</strong>
            <span className={styles.apptDate}>{formatDate(props.date)}</span>
            <span className={styles.apptTime}>{props.time}</span>
          </div>
        </div>

        <div className={styles.apptdetails}>
          <div className={styles.apptField}>
            <span className={styles.apptLabel}>Type:</span>
            <span className={styles.apptValue}>{props.type}</span>
          </div>

          <div className={styles.apptField}>
            <span className={styles.apptLabel}>Purpose:</span>
            <span className={styles.apptValue}>{props.purpose}</span>
          </div>

          <div className={styles.apptField}>
            <span className={styles.apptLabel}>Company:</span>
            <span className={styles.apptValue}>{props.company}</span>
          </div>

          <div className={styles.apptField}>
            <span className={styles.apptLabel}>Person Meeting With:</span>
            <span className={styles.apptValue}>{props.personMeetingWith}</span>
          </div>

          <div className={styles.apptField}>
            <span className={styles.apptLabel}>Address:</span>
            <span className={styles.apptValue}>{props.address}</span>
          </div>

          <div className={styles.apptField}>
            <span className={styles.apptLabel}>Comments:</span>
            <span className={styles.apptValue}>{props.comments}</span>
          </div>
        </div>
      </div>

      <div className={styles.apptActions}>
        <button
          className={`${styles.apptBtn} ${styles.deleteBtn}`}
          onClick={() => props.deleteAppt(props.id)}
        >
          delete
        </button>

        <button
          className={`${styles.apptBtn} ${styles.updateBtn}`}
          onClick={() => setShowUpdateModal(true)}
        >
          update
        </button>
      </div>
    </>
  );
};

export default Appt;
