import React from "react";
import "../../assets/css/About.css";
import supercarImage from "../../assets/images/about.jpg"; // Replace with your image path

export default function About() {
  return (
    <div className="about-container">
      <div className="overlay"></div> {/* Overlay added */}
      {/* <div className="about-image">
        <img src={supercarImage} alt="Supercar" />
      </div> */}
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">Luxury Rides</span> — your
          premier destination for the most exclusive supercars and luxury
          vehicles. Since our inception in 1994, we have prided ourselves on
          delivering a collection of high-performance cars with unparalleled
          craftsmanship, ensuring every ride is as exhilarating as it is
          elegant.
        </p>
        <p>
          Whether you're looking to make an inquiry, explore the finest brands,
          or find your dream car, we ensure a smooth, seamless, and personal
          experience. Our dedicated team of automotive enthusiasts is always
          here to assist you, building long-term relationships based on trust
          and passion for cars.
        </p>
        <p className="about-quote">
          "Luxury isn’t just about cars. It’s about delivering experiences that
          ignite your passion and fuel your dreams."
        </p>
      </div>
    </div>
  );
}
