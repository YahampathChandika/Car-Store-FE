import React from "react";
import "../../assets/css/Hero.css";
import video from "../../assets/images/back.mp4";
import { useGetBrandsQuery } from "../../store/api/vehiclesApi";

export default function Hero() {
  const { data: brands } = useGetBrandsQuery();

  return (
    <div className="hero-container">
      <div className="hero-video-container">
        <video autoPlay loop muted className="hero-background-video">
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
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
        {brands?.payload.map((brand) => (
          <div key={brand.id} className="hero-logo-box">
            <img
              className="hero-logo-img"
              src={brand.brandImage}
              alt={brand.brandName}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
