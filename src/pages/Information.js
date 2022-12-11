import React from 'react'
import Footer from '../components/Home/Footer'
import AboutPage from '../components/About/AboutPage';
import { motion } from "framer-motion";
import Navbar2 from '../components/Navbar2/Navbar2';
const Information = () => {
  return (
    <motion.div className="academics" initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>
    <Navbar2/>
    <AboutPage/>
    <Footer/>  
    </motion.div>
  )
}

export default Information