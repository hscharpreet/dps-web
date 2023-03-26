import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerOverlay">
          <img  className="overlayImg" src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Ffooter%20(1).jpg?alt=media&token=c7bbe774-bc0f-4e29-b253-80ade7a03b26" alt="" />

          <div className="footer-container">
            <div className="address ">
              <img className="addressImg" src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FLogo.png?alt=media&token=07a78930-2cbb-4c2f-a33d-275fd3251423" alt="" />
              <h1 className="addressHead">Divine Public School</h1>
              <p className="addressText">
                Satyanganj, Ahraura, <br />
                Mirzapur, <br />
               Uttar Pradesh, <br />
                MO 8318909165
              </p>
            </div>
            <div className="line "></div>
            <div className="column col-1">
              <Link to="/dps-web" className="link">
                <h1>Home</h1>
              </Link>
              <Link to="/dps-web/activities" className="link">
                <h1>Gallery</h1>
              </Link>
              <Link to="/dps-web/admission" className="link">
                <h1>Curriculam</h1>
              </Link>
              <Link to="/dps-web/contact" className="link">
                <h1>Map</h1>
              </Link>
              <Link to="/dps-web/activities" className="link">
                <h1>Uniform</h1>
              </Link>
            </div>
            <div className="column col-2">
              <Link to="/dps-web/about" className="link">
                <h1>About</h1>
              </Link>
              <Link to="/dps-web" className="link">
                <h1>Testimonials</h1>
              </Link>
              <Link to="/dps-web/activities" className="link">
                <h1>News and Events</h1>
              </Link>
              <Link to="/dps-web/admission" className="link">
                <h1>Admission</h1>
              </Link>
              <Link to="/dps-web/admission/fees" className="link">
                <h1>Fees</h1>
              </Link>
            </div>
            <hr className="footerLine"/>
          </div>
 
          <div className="copyright">
        <div className="left">
          <p >
            &#169; 2023 Divine Public School. Developed by Parul Thakur - Web
            Developer
          </p>
        </div>
        <div className="right">
        <p>Term and condition | Privacy Policy</p>
        </div>
      </div>
        </div>
     
      </div>

    </>
  );
};

export default Footer;
