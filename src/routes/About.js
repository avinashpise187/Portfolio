import React from 'react'
import { Navbar } from './Navbar';
import Footer from './Footer'
import AboutContact from './AboutContact'
import Heroimage2 from './Heroimage2'
export const About = () => {
  return (
    <div>
       <Navbar />
       <Heroimage2 heading="ABOUT." text="I Am a friendly Front-End Developer..!"/>
       <AboutContact />
      <Footer />
    </div>
  )
}
