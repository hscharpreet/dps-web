
import React from 'react'
import './Card.css'
import { motion } from "framer-motion"
import children from '../../assets/children1jpg.jpg'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Card = () => {
  return (
    <motion.div className="cardItem" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
      <div className="cardImg" >
        <img src={children} alt="" />
      </div>
      <div className="cardText">
        <h1>Math's Day</h1>
        <button className="btn">
        <Link to="/activities/images" >
          <p>See More <ArrowForwardIcon/></p>
        </Link>
        </button>
      </div>
    </motion.div>
  )
}

export default Card