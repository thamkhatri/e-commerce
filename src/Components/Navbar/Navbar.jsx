import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
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
