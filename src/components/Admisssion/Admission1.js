import React from "react";
import "./Admission1.css";
const Admission1 = () => {
  return (
    <>
      <div className="admissionBanner">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Flittlekids1.webp?alt=media&token=7855a9b0-57a0-4eb9-821b-660cffc066cb"
          alt="banner"
        />
      </div>
      <div className="admissionContainer">
        <div className="admissionContent">
          <h1>Joining Divine...</h1>
          <h3>
            Our normal years of entry are in Early Years and Reception but we do
            take pupils throughout the year in all year groups if places are
            available.
          </h3>
          <p>
            This will usually follow a visit and a meeting with the Headteacher
            and the child will be offered a trial day. It is important on this
            day they demonstrate that they can settle in and benefit from the
            environment that we offer. Depending on the age of the child, they
            may need to undertake some straightforward tests in Maths and
            English. Following application and the trial day, places will be
            offered where space permits. Reports from their current school will
            be requested.
          </p>
        </div>
      </div>
    </>
  );
};

export default Admission1;
