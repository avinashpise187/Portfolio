import "./FooterStyles.css";

import React from 'react'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
            <div className="location">
                
            <h4><FaHome size={20} style={{color:"#fff",marginright:"2rem"}}/>           
           <p>AP. PISEWADI, TAL-MALSHIRAS, DIST SOLAPUR <br />MAHARASHTRA, INDIA 13113</p></h4>                   
            </div>
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"#fff",marginright:"2rem"}}/>
            {" "} 9689343020</h4>
            </div>
            <div className="email">
           <h4> <FaMailBulk size={20} style={{color:"#fff",marginright:"1rem"}}/>
            {" "}9689343020</h4>
            </div>
        </div>
        <div className="right">
            <h4>About The Profile</h4>
            <div className="">
            <h4> <FaFacebook size={20} style={{color:"#fff",marginright:"1rem"}}/>
            {" "}avpise</h4>
            <h4> <FaTwitter size={20} style={{color:"#fff",marginright:"1rem"}}/>
            {" "}#Avinash</h4>
            <h4> <FaLinkedin size={20} style={{color:"#fff",marginright:"1rem"}}/>
            {" "}Avinash Pise</h4>
            <h4> <FaInstagram size={20} style={{color:"#fff",marginright:"1rem"}}/>
            {" "}AvinashBapuPise</h4>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer