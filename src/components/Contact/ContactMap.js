import React from 'react'
import './ContactMap.css'
import SimpleMap from './CMap'
const Contact = () => {
  return (
    <>
    <div className="contactMap">
   <div className="contactHeading">
      <h1>Get in touch with Divine School</h1>
      <h2>You can contact us via any of the methods below:</h2>
      <h3>Address:</h3>
      <p>Moorlands School, Foxhill Drive, Weetwood Lane, Leeds LS16 5PF</p>
      <h3>Phone:</h3><p>36239756298</p>
      <h3>Email:</h3> <p>info@moorlands-school.co.uk</p>
      <p>The Headteacher can be contacted by email at: Jacqueline.Atkinson@moorlands-school.co.uk</p>
    
        </div>
        <div className="map">
           <SimpleMap/>
        </div>
    </div>
    
</>
  )
}

export default Contact