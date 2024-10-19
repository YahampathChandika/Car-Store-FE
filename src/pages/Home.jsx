import React from "react";
import "../assets/css/Home.css";
import Hero from "../components/home/Hero";
import Navbar from "../components/common/Navbar";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Hero />
    </div>
  );
}
