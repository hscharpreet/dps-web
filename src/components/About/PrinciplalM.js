import React from "react";
import "./PrincipalM.css";
import principlephoto from "../../assets/Group 10.png";
const PrinciplalM = () => {
  return (
    <>
      <div className="messageContainer">
        <div className="headName col">
          <h1>Meet the head</h1>
          <p>Ms.Pinki Gupta</p>
        </div>
        <div className="principalImage col">
          <img src={principlephoto} alt="" />
        </div>
        <div className="parah col">
          <h3 className="heading">
            <span className="line1"></span> PRINCIPAL'S MESSAGE{" "}
          </h3>
          <p>
           " My leadership role will focus on providing an enabling environment
            for the children so that they can be nurtured and guided towards
            becoming future leaders and ideal citizens of our great nation.
            Pursuing excellence by students in their chosen fields; academics,
            sports, or extracurricular activities shall be encouraged at every
            step. A healthy mind in a healthy body is a universally accepted
            truth. Inculcating the right values systems and character building
            is a prerequisite for our children to take on the world with."
            {/* knowledge and competence. <br /> I shall endeavor to ensure that
            students of Samaritan Mission School (High) pursue their dreams in a
            safe, secure, and healthy environment. My heartful thanks to Founder
            Secretary Shri Mamoon Akhtar under whose stewardship the school has
            progressed in leaps and bounds. I also would like to thank the past
            and present management, parents, and students for their
            unconditional support and contribution. I remain grateful to all
            teaching and non-teaching staff who have stood by me all the time. */}
          </p>
        </div>
      </div>
    </>
  );
};

export default PrinciplalM;
