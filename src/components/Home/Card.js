
import React from 'react'
import './Card.css'
import { motion } from "framer-motion"
import children from '../../assets/children1jpg.jpg'
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Card = () => {
  return (
    <div className="cardItem" >
      <motion.div className="cardImg" whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}>
        <img src={children} alt="" />
      </motion.div>
      <div className="cardText">
        <h1>Math's Day</h1>
        <button className="btn">
        <Link to="/activities/images"  style={{textDecoration: 'none'}}>
        <motion.h4 whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}> See More <ArrowForwardIcon/></motion.h4>
       
        </Link>
        </button>
      </div>
    </div>
  )
}

export default Card