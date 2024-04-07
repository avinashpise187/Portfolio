import "./HeroImageStyle.css";
import introimg from "../images/introimg.jpg"
import React from 'react'
import {Link} from "react-router-dom";
const HeroImage = () => {
  return (
    <div className="hero">
       <div className="mask">
        <img src={introimg} className="introimg" alt="" />
        </div>  
        <div className="content">
        <p>Hi, I'M DEVELOPER.</p>
        <h1>REACT DEVELOPER</h1>
        <div>
          <Link to="project" className="btn">Projects</Link>
          <Link to="project" className="btn btn-light">Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImage