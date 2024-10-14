import React from "react";
import "../assets/css/Home.css";
import Hero from "../components/home/Hero";
import Navbar from "../components/common/Navbar";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
      <Contact />
    </div>
  );
}
