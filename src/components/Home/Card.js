
import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Card = () => {
  return (
    <div className="cardItem">
      <div className="cardImg">
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="" />
      </div>
      <div className="cardText">
        <h1>Math's Day</h1>
        <button className="btn">
        <Link to="/activities/images" >
          <p>See More <ArrowForwardIcon/></p>
        </Link>
        </button>
      </div>
    </div>
  )
}

export default Card