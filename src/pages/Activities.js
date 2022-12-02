import React from 'react'
import './Activities.css'
import Footer from '../components/Home/Footer'
import Navbar from "../components/Contact/Navbar";
import AboutPage from '../components/About/AboutPage';
import Gallery from '../components/Activities/Gallery';
const Activities = () => {
  return (
    <div className="activities">
    <Navbar/>
    <AboutPage/>
    <Gallery/>
    <Footer/>   </div>
  )
}

export default Activities