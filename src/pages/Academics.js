import React from 'react'
import Footer from '../components/Home/Footer'
import Navbar from "../components/Contact/Navbar";
import AboutPage from '../components/About/AboutPage';
import { motion } from "framer-motion";
const Academics = () => {
  return (
    <motion.div className="academics" initial={{ width: 0 }}  animate={{ width: "100%" }}  exit={{ x:window.innerWidth, transition:{duration:0.3} }}>
      <Navbar/>
      <AboutPage/>
      <Footer/> 
      </motion.div> 
  )
}

export default Academics