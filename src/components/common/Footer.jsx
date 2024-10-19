// Footer.jsx
import React from "react";
import "../../assets/css/Footer.css";

export default function Contact() {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <h1 className="footer-heading">LUXURY RIDE</h1>
        <p className="footer-description">
          Luxury Ride is the destination that you’ve been looking for all this
          time. Comprising of the most enthralling lineup of pre-owned luxury
          cars. We offer a car ecosystem to cater to all your automotive needs,
          ensuring complete satisfaction and fulfillment.
        </p>
      </div>
      <div className="footer-info">
        <div className="connect-with-us">
          <h2>Connect With Us</h2>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="quick-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="assistance">
          <h2>For Assistance</h2>
          <p>📞 +91 8410084100</p>
          <p>📧 info@luxuryride.in</p>
        </div>
      </div>
    </div>
  );
}
