import React from "react";
import "./Hero.css";
// import banner1 from "../Assets/banner1.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS </h2>
        <div>
          <div className="hand-hand-icon"></div>
          <p>Shop Now </p>
        </div>
        <div className="hero-latest-btn">
          <div>LATEST COLLECTION</div>
          {/* <img src={banner1} alt="" /> */}
        </div>
      </div>
      <div className="hero-right"></div>
    </div>
  );
};

export default Hero;
