// Hero.js
import React from "react";
import "../../assets/css/Hero.css";
import video from "../../assets/images/back.webm";
import bugatti from "../../assets/images/bugatti-logo.png";
import ferrari from "../../assets/images/ferrari-logo.png";
import McLaren from "../../assets/images/McLaren-logo.png";
import lamborghini from "../../assets/images/lamborghini-logo.png";
import porsche from "../../assets/images/porsche-logo.png";
import rolls from "../../assets/images/rolls-royce-logo.png";
import Brabus from "../../assets/images/Brabus-Logo.png";
import maserati from "../../assets/images/maserati-logo.png";
import koenigsegg from "../../assets/images/koenigsegg-logo.png";
import pagani from "../../assets/images/pagani-logo.png";
import benz from "../../assets/images/mercedes-benz-logo.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-video-container">
        <video autoPlay loop muted className="hero-background-video">
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content"></div>
      </div>
      <p className="hero-des-1">Welcome to</p>
      <p className="hero-des-2">Luxury Rides</p>
      <p className="hero-des-3">
        We are a family-run business, an independent luxury car dealership
        established in 1994 with a curated selection of the latest supercars,
        luxury SUVs, and modern performance cars for sale. <br />
        We pride ourselves on preparing and presenting them to the highest
        standards, while our long-serving staff are dedicated to building
        relationships and ensuring the experience of buying or selling supercars
        is always enjoyable, seamless, and secure.
      </p>
      <div className="hero-logo-container">
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={ferrari} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={bugatti} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={McLaren} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={koenigsegg} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={maserati} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={Brabus} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={rolls} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={porsche} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={lamborghini} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={pagani} alt="Logo" />
        </div>
        <div className="hero-logo-box">
          <img className="hero-logo-img" src={benz} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
