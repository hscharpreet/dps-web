// import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import Testimonials from "./Testimonials";
// import "./TestimonialCarousel.css"
// const TestimonialCarousel = () => {
//     const data = ["1", "2","3", "4"]
//     const [currentIndex, setCurrentIndex] = useState(0)
//     const carouselInfiniteScroll = () => {
//         if (currentIndex === data.length-1) {
//             return setCurrentIndex(0)
//         }
//         return setCurrentIndex(currentIndex+1)
//     }
//     useEffect(() => {
//       const interval = setInterval(() => {
//         carouselInfiniteScroll()}, 3000
//      )
//      return () => clearInterval(interval)})

    
//   return (
//     <>
//     <div className="testimonialContainer">
 {/* {data.map((item, index) => { */}
    {/* return <div className="testimonialItem" >
    <Testimonials/>

    </div>
    {/* }) */}
 {/* } */}
    // </div>
    // </>
//   )
// }

// export default TestimonialCarousel 

// style={{transform: `translate(-${currentIndex * 100}%)`}} 
    // key={index}>{item}