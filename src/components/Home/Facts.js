import React from "react";
import "./Fact.css";
import children from "../../assets/children.jpeg";
import { SiGoogleclassroom } from "react-icons/si";
import { IconContext } from "react-icons";
const Facts = () => {
  return (
    <>
      <div className="facts">
        {/* <img className ="factImg" src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" /> */}
        <div className="factOverlay">
          <div className="img-text">
            <div className="childrenImg">
              <img src={children} alt="children-img" />
            </div>

            <div className="everything">
              <h2>Everything You</h2>
            </div>
            <div className="want">
              <h1>WANT</h1>
            </div>
            <div className="lines">
              <p>
                This environment is designed to bring out the best in who you
                are. Every interest you pursue, every talent you develop, and
                every experience you embrace can lead you to new and unexpected
                places. This exploration will bring you well beyond the
                boundaries of what you thought possible.
              </p>
            </div>
            <div className="content">
              <h1>hey</h1>
            </div>
          </div>
          {/* <div className="content">
          <h1 className="facts-heading">
            <span></span> FACTS
          </h1>
       
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Facts;

{
  /* <div className="ellipse">
<div className="outer-circle">
  <div className="inner-circle">
    <IconContext.Provider
      value={{ color: "#FFCB42", size: "20px" }}
    >
      <span className="inside-content">
        <SiGoogleclassroom />
      </span>
    </IconContext.Provider>
  </div>
</div>
<h1 className="text">
  average size <br /> classrom
</h1>
</div>
<div className="ellipse">
<div className="outer-circle">
  <div className="inner-circle">
    <IconContext.Provider
      value={{ color: "#FFCB42", size: "20px" }}
    >
      <span className="inside-content">
        <SiGoogleclassroom />
      </span>
    </IconContext.Provider>
  </div>
</div>
<h1 className="text">
  average size <br /> classrom
</h1>
</div>
<div className="ellipse">
<div className="outer-circle">
  <div className="inner-circle">
    <IconContext.Provider
      value={{ color: "#FFCB42", size: "20px" }}
    >
      <span className="inside-content">
        <SiGoogleclassroom />
      </span>
    </IconContext.Provider>
  </div>
</div>
<h1 className="text">
  average size <br /> classrom
</h1>
</div>
<div className="ellipse">
<div className="outer-circle">
  <div className="inner-circle">
    <IconContext.Provider
      value={{ color: "#FFCB42", size: "20px" }}
    >
      <span className="inside-content">
        <SiGoogleclassroom />
      </span>
    </IconContext.Provider>
  </div>
</div>
<h1 className="text">
  average size <br /> classroom
</h1>
</div> */
}
