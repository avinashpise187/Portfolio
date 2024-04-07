import React from 'react'
import { Navbar } from './Navbar';
import Footer from './Footer'
import Heroimage2 from './Heroimage2'
import PricingCard from './PricingCard'
import Work from "../Components/Work"
export const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage2 heading="PROJECTS." text="Something About My Recent Efforts"/>
      < Work />
      <PricingCard />
      <Footer />
      </div>
  )
}

export default Project;
