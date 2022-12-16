import React from 'react'
import teacher from "../../assets/Rectangle 1.png"
import "./TeacherCard.css"
const TeachersCard = () => {
  return (
    <div className="teachersCard">
        <img src={teacher} alt="" />
        <h1>Miss.Anita Singh</h1>
        <h2> <span className='title'>Title:</span> English Teacher</h2>
    </div>
  )
}

export default TeachersCard