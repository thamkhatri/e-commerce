import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
// import cart_icon from "../Assets/cart_icon";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu"></ul>
    </div>
  );
};
export default Navbar;
