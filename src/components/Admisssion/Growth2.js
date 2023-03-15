import React from 'react'
import '../About/Growth.css'
import {AiOutlineArrowRight} from "react-icons/ai"
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons/lib";
const Growth2 = () => {
  return (
    <div className="growthCard">
     <IconContext.Provider
            value={{ color: "#564bce", className: "icon3" }}
          >
      <div className="growth g1">
        <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FPXL_20221022_060034724%20(1).jpg?alt=media&token=22a8f669-f34e-4435-b522-a4bfc1bb1963" alt="" />
        <div className="growthContent">
          <h1>Open Mornings</h1>
          <p>
          Open Mornings are a great opportunity to see the school and to get an idea of what it is like to be a Divine pupil.
          </p>
          <p>
        <NavLink to="/about" className="link"> About <AiOutlineArrowRight/></NavLink></p>
        </div>
      </div>
      <div className="growth g2">
      <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2Fkid.jpg?alt=media&token=c2abbc6f-95e4-4d6a-a50d-3e5ecb4fe5f9" alt="" />
        <div className="growthContent">
        <h1>Admission Process</h1>
        <p>
        Divine Public School is excited to enroll students who are curious, driven, and ready to look beyond the day-to-day to ask what’s next.  We can’t wait to learn more about you!
        </p>
        <p>
        <NavLink to="/admission/fees" className="link"> Admission Process <AiOutlineArrowRight/></NavLink></p>
      </div>
      </div>
      <div className="growth g3">
      <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fabout%2FBanner.jpg?alt=media&token=1d6d4c62-6feb-449b-9abd-412b0ec34984" alt="" />
        <div className="growthContent">
        <h1>Uniforms</h1>
        <p>
          We offer our children many leadership and teamwork opportunities to
          build their confidence and prepare them for future challenges.
        </p>
        <p>
        <NavLink to="/admission/fees" className="link"> Unifrom <AiOutlineArrowRight/></NavLink></p>
      </div>
      </div>
      </IconContext.Provider>
    </div>
  )
}

export default Growth2