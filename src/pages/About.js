
import React from 'react'
import './About.css'
import Footer from '../components/Home/Footer'
import Navbar from "../components/Contact/Navbar";
import AboutPage from '../components/About/AboutPage';
import DivineWelcome from '../components/About/DivineWelcome';
import PrinciplalM from '../components/About/PrinciplalM';

const About = () => {
  return (
    <div className='about'>

 <Navbar/>
 <AboutPage/>
 <DivineWelcome/>
 <PrinciplalM/>
 <Footer/>
    </div>
  )
}

export default About