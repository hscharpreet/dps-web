import React from 'react'
import Admission1 from '../components/Admisssion/Admission1';
import Footer from '../components/Home/Footer'
import AboutPage from '../components/About/AboutPage';
import { motion } from "framer-motion";
import Navbar2 from '../components/Navbar2/Navbar2';
import VisitCard from '../components/Home/VisitCard';
import EarlyYears from '../components/Admisssion/EarlyYears';
import Download from '../components/Admisssion/Download';
import Growth2 from '../components/Admisssion/Growth2';
import SlideUp from "../components/SlideUp";
const Admission = () => {
  return (
    <motion.div className="academics" initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>
    <Navbar2/>
    <AboutPage/>
    <Admission1/>
    <EarlyYears/>
    <Download/>
    <Growth2/>
    <SlideUp />
    <VisitCard/>
    <Footer/>   </motion.div>

  )
}

export default Admission