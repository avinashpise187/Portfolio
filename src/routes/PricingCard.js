import { Link } from "react-router-dom";
import "./Pricingcard.css";
import React from 'react'

const Pricingcard = () => {
  return (
    <div className="pricing">
        <div className="Card-container">
        <div className="Card">
            <h3>- BASIC -</h3>
            <span className="bar"></span>
            <p className="btc">$ 100</p>
            <p>-3 Days -</p>
            <p>-3 Pages -</p>
            <p>- Featurd -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">PURCHASR</Link>
        </div>
        <div className="Card">
            <h3>- premium -</h3>
            <span className="bar"></span>
            <p className="btc">$ 200</p>
            <p>-5 Days -</p>
            <p>-6 Pages -</p>
            <p>- Featurd -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">PURCHASR</Link>
        </div>
        <div className="Card">
            <h3>- professional -</h3>
            <span className="bar"></span>
            <p className="btc">$ 500</p>
            <p>-10 Days -</p>
            <p>-15 Pages -</p>
            <p>- Featurd -</p>
            <p>- Responsive Design -</p>
            <Link to="/contact" className="btn">PURCHASR</Link>
        </div>
        </div>
    </div>
    
  )
}

export default Pricingcard