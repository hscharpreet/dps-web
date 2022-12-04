
import React from 'react'
import './About.css'
import Footer from '../components/Home/Footer'
import Navbar from "../components/Navbar/Navbar";
import AboutPage from '../components/About/AboutPage';
import DivineWelcome from '../components/About/DivineWelcome';
import PrinciplalM from '../components/About/PrinciplalM';
import Faculty from '../components/About/Faculty';
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div className='about' 
   initial={{ opacity: 0 }}  animate={{ opacity: 1 }}  exit={{opacity:0 }}>

 <Navbar/>
 <AboutPage/>
 <DivineWelcome/>
 <PrinciplalM/>
 <Faculty/>
 <Footer/>
  </motion.div> 
  )
}

export default About