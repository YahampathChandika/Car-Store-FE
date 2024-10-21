import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../assets/css/Home.css";
import Hero from "../components/home/Hero";
import Navbar from "../components/common/Navbar";
import Latest from "../components/home/Latest";
import Contact from "../components/home/Contact";
import Footer from "../components/common/Footer";
import About from "../components/home/About";

export default function Home() {
  const aboutRef = useRef(null);  // Reference for About section
  const contactRef = useRef(null); // Reference for Contact section
  const location = useLocation();

  // Scroll function
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll based on location state when the page loads
  useEffect(() => {
    if (location.state?.section === "about") {
      scrollToSection(aboutRef);
    } else if (location.state?.section === "contact") {
      scrollToSection(contactRef);
    }
  }, [location]);

  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Latest />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
