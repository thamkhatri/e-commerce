import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/colorose1.jpeg";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>New Launch Sale</h1>
        <p>ONLY ON BEST SELLERS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
