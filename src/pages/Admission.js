import React from 'react'
import Admission1 from '../components/Admisssion/Admission1';
import Footer from '../components/Home/Footer'
import Navbar from "../components/Navbar/Navbar";
import AboutPage from '../components/About/AboutPage';
import { motion } from "framer-motion";
const Admission = () => {
  return (
    <motion.div className="academics" initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>
    <Navbar/>
    <AboutPage/>
    <Admission1/>
    <Footer/>   </motion.div>

  )
}

export default Admission