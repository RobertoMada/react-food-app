import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, getTotalQuantity } = useContext(StoreContext);

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <div className="navbar">
      <button onClick={pageUp} className="logo">
        <img src={assets.logo} alt="Tomato logo" />
      </button>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <li
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          <Link to="/#menu">Menu</Link>
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          <Link to="/#mobile-app">Mobile-app</Link>
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          <Link to="/#contact-us">Contact us</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="cart">
            <img src={assets.basket_icon} alt="" />
          </Link>

          {getTotalQuantity() > 0 ? (
            <div className="dot">{getTotalQuantity()}</div>
          ) : (
            ""
          )}
        </div>
        <button onClick={() => setShowLogin((prev) => !prev)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
