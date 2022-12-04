import React from 'react'
import Footer from '../components/Home/Footer'
import Navbar from "../components/Navbar/Navbar";
import AboutPage from '../components/About/AboutPage';
import { motion } from "framer-motion";
const Academics = () => {
  return (
    <motion.div className="academics" initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>
      <Navbar/>
      <AboutPage/>
      <Footer/> 
      </motion.div> 
  )
}

export default Academics