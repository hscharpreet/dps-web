import React from 'react'
import Navbar from './Navbar'
import './Header.css'
import Slider from './slider/Slider'
import Navigation from './Navigation'



const Header = () => {
  return (
   <>
    <div className="header">
        <Slider/>
        <Navigation/>
        
    </div>
   </>
  )
}

export default Header