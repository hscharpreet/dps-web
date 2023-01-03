import React from "react";
import "./EarlyYears.css";
import  kids  from "../../assets/children.png";
const EarlyYears = () => {
  return (
    <div className="earlyContainer">
      <div className="early1 col">
        <h1>Applying for a place in Early Years (2-5years)</h1>
        <p>
          Parents who are applying for a place in Early Years may wish to visit
          the school prior to this, so feel free to contact us to have a look
          around the school and meet with the Headteacher and Head of Early
          Years.
        </p>
      </div>
      <div className="early2 col">
        <img src={kids} alt="" />
      </div>
      <div className="early3 col">
        <p>
          Places will be offered on receipt of the application form and once
          accepted, then the place is guaranteed. Early application is
          encouraged, as there is a maximum number of children that we can
          accommodate. There is a minimum requirement of 4 sessions per week.
          When start dates have been confirmed, we offer a settling in session
          prior to your child’s arrival.
        </p>
      </div>
    </div>
  );
};

export default EarlyYears;
