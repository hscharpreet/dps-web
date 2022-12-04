import React from 'react'
import './Activities.css'
import { motion } from "framer-motion";
import Footer from '../components/Home/Footer'
import Navbar from "../components/Navbar/Navbar";
import AboutPage from '../components/About/AboutPage';
import Gallery from '../components/Activities/Gallery';
const Activities = () => {
  return (
    <motion.div className="activities"initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>
    <Navbar/>
    <AboutPage/>
    <Gallery/>
    <Footer/>   </motion.div>
  )
}

export default Activities