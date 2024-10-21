// Footer.jsx
import React from "react";
import "../../assets/css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2>Luxury Rides</h2>
          <p>
            Your dream cars are just a click away! Explore our collection of
            exotic supercars and luxury vehicles today.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <div className="quick-links-con">
              <li>Home</li>
              <li>About Us</li>
            </div>
            <div className="quick-links-con">
              <li>Showroom</li>
              <li>Contact</li>
            </div>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button>Subscribe</button>
          </form>
        </div>

        <div className="footer-section social-media">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Luxury Rides. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
