// import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          SHOP{menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("makeup");
          }}
        >
          MAKEUP {menu === "makeup" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("skincare");
          }}
        >
          SKINCARE{menu === "skincare" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("bath&body");
          }}
        >
          BATH&BODY {menu === "bath&body" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
export default Navbar;
