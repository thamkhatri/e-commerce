import React from "react";
import "./Hero.css";
import hero_img from "../Assets/bojbanner.webp";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New arrivals</h2>
        <div>
          <p>collections</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
        </div>
      </div>

      <div className="hero-right">{<img src={hero_img} alt="" />}</div>
    </div>
  );
};

export default Hero;
