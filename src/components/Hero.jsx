import React from "react";
import "./Hero.css";
import Crypto from "../assests/hero-img.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <p>Buy & Sell Crypto 25/7 using your retirement account</p>
          <h2>Invest in Cryprocurrency with Your IRA</h2>
          <p>Buy, Sell, and store hundreds of Cryprocurrencies</p>
          <div className="input_section">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="crypto-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
