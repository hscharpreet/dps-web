
import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Information from './pages/Information';
import { Routes, Route } from 'react-router-dom';
import Academics from './pages/Academics';
import Admission from './pages/Admission';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/information" element={<Information/>}/>
      <Route path="/admission" element={<Admission/>}/>
      <Route path="/academics" element={<Academics/>}/>
      <Route path="/activities" element={<Activities/>}/>
      <Route path="/contact" element={<Contact/>}/>
   </Routes>
    </>
  )
}

export default App;
