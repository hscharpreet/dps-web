import React from 'react'
import './SlideUp.css'
import { FaArrowUp } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';
const SlideUp = () => {
  const [isVisible, setIsVisible] = useState(false)
  const goToBtn = () => {
    window.scrollTo({ top:0, left:0, behavior: "smooth"});
  }

  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll = document.body.scrolltop || document.documentElement.scrollTop;

    if(winScroll > heightToHidden) {
        setIsVisible(true)
    }else{
      setIsVisible(false)
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
return () => window.removeEventListener("scroll", listenToScroll)
  }, []);
  
  return (
    <>
    {isVisible && (

    
    <div className="slideUp" onClick={goToBtn}>
     <FaArrowUp className='topbtnIcon'/>

    </div>
    )}
    </>
  )
}

export default SlideUp