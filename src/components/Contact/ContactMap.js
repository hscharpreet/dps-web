import React from 'react'
import './ContactMap.css'
import SimpleMap from './CMap'
const Contact = () => {
  return (
    <>
    <div className="contactMap">
   <div className="contactHeading">
      <h1 > <span></span> CONTACT</h1>
      </div>
    <div className="map-contact">
        <div className="address">
        <div class="rectangle">
          <h1 className='text'>Telephone</h1>
        </div>
        <div class="rectangle">
        <h1 className='text'>Email</h1>
        </div>
        <div class="rectangle">
        <h1 className='text'>WhatsApp</h1>
        </div>
        <div class="rectangle">
        <h1 className='text'>Address</h1>
        </div>
        </div>
        <div className="map">
           <SimpleMap/>
        </div>
    </div>
    </div>
</>
  )
}

export default Contact