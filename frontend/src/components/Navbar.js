import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/">
        <div className="logo">
          <img src={"/assets/img/logo.jpg"} alt="logo" />
        </div>
      </Link>
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
