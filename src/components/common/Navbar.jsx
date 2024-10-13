import React from "react";
import "../../assets/css/Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <ul className="navbar-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">Showroom </a>
          </li>
          <li>
            <a href="/contact">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
