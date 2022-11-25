import React from "react";
import "./Fact.css";
import children from "../../assets/children.jpeg";
import { SiGoogleclassroom } from "react-icons/si";
import { IconContext } from "react-icons";
const Facts = () => {
  return (
    <>
      <div className="facts">
        <div className="img-text">
          <img src={children} alt="children-img" />
          <div className="everything">
            <h2>Everything You</h2>
          </div>
          <div className="want">
            <h1>WANT</h1>
          </div>
          <div className="lines">
            <p>
              This environment is designed to bring out the best in who you are.
              Every interest you pursue, every talent you develop, and every
              experience you embrace can lead you to new and unexpected places.
              This exploration will bring you well beyond the boundaries of what
              you thought possible.
            </p>
          </div>
        </div>
        <div id="content">
          <h1 className="facts-heading">
            {" "}
            <span></span> FACTS
          </h1>
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
        </div>
      </div>
    </>
  );
};

export default Facts;
