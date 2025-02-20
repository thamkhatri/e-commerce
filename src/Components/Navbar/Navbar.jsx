import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { useRef } from "react";

import nav_dropdown from "../Assets/down.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            SHOP
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("makeup");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/makeup">
            MAKEUP
          </Link>
          {menu === "makeup" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("skincare");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/skincare">
            SKINCARE
          </Link>
          {menu === "skincare" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("bodycare");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/bodycare">
            BODYCARE
          </Link>
          {menu === "bodycare" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
