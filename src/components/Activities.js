import React from 'react'
import './Activites.css'
import image from '../assets/children.jpeg'
import rect from '../assets/Rectangle 15.png'
const Activities = () => {
  return (
    <>
        <div className="activity">
            <div className="text">
             <h1>ACTIVITIES</h1>
             <img src={rect} alt="" />
            </div>
            <div className="gallery">
                <img src={image} alt="" />
            </div>
        </div>
    </>
  )
}

export default Activities