import React from 'react';
import { Navbar } from './Navbar';
import HeroImage from './HeroImage'
import Footer from './Footer'
import Work from "../Components/Work"

export const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
