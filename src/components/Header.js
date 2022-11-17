import React from 'react'
import Navbar from './Navbar'
import './Header.css'
import Footer from './Footer'
import Slider from './slider/Slider'
import Navigation from './Navigation'



const Header = () => {
  return (
   <>
    <div className="header">
        <Slider/>
        <Navigation/>
        <Footer/>
    </div>
   </>
  )
}

export default Header