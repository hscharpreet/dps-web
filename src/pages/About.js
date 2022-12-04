
import React from 'react'
import './About.css'
import Footer from '../components/Home/Footer'
import Navbar from "../components/Contact/Navbar";
import AboutPage from '../components/About/AboutPage';
import DivineWelcome from '../components/About/DivineWelcome';
import PrinciplalM from '../components/About/PrinciplalM';
import Faculty from '../components/About/Faculty';
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div className='about' 
    initial={{ width: 0 }} 
     animate={{ width: "100%" }}  
     exit={{ x:window.innerWidth, transition:{duration:0.3} }}>

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