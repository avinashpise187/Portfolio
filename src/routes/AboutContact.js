
import "./AboutContactstyle.css"
import {Link} from "react-router-dom";
import React from 'react'

import react1 from "../images/react1.jpg"
import react3 from "../images/react3.jpg"
const AboutContact = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a React Front-End developer. I Create Responsive Secure Website For My Clients</p>
        <Link to="/contact">
          <button className="btn">contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img"  alt="" />
          </div>
          <div className="img-stack bottom">
            <img src={react3} className="img"  alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContact