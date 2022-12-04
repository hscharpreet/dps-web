import React from 'react'
import './Activities.css'
import { motion } from "framer-motion";
import Footer from '../components/Home/Footer'
import Navbar from "../components/Contact/Navbar";
import AboutPage from '../components/About/AboutPage';
import Gallery from '../components/Activities/Gallery';
const Activities = () => {
  return (
    <motion.div className="activities" initial={{ width: 0 }}  animate={{ width: "100%" }}  exit={{ x:window.innerWidth, transition:{duration:0.3}} }>
    <Navbar/>
    <AboutPage/>
    <Gallery/>
    <Footer/>   </motion.div>
  )
}

export default Activities