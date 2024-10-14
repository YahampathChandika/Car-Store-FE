// Vehicle.js
import React from "react";
import Slider from "react-slick";
import "../assets/css/Vehicle.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const vehicle = {
  id: 1,
  brand: "Koenigsegg",
  name: "Regera",
  year: 2021,
  price: "3,000,000",
  images: [
    "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/cc4468f9-8bf0-457e-88f7-11ceade075e1/je/1900xxs.jpg",
    "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/da7389e0-4703-4d1f-a683-8fc448fa3bc3/je/1900xxs.jpg",
    "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/eaff5948-a1fc-49ae-b491-58b1a9134f6b/je/1900xxs.jpg",
    "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/9a5316b2-d903-44ca-8990-5806ae7b5f0a/je/1900xxs.jpg",
    "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/4c00e662-aedc-42bc-8c48-49eef9816ffe/je/1900xxs.jpg",
  ],
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      className="material-symbols-outlined veh-arrow veh-arr-left"
      onClick={onClick}
    >
      keyboard_arrow_left
    </span>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      className="material-symbols-outlined veh-arrow veh-arr-right"
      onClick={onClick}
    >
      keyboard_arrow_right
    </span>
  );
};

export default function Vehicle() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="veh-con">
      <div className="veh-img-con">
        <Slider {...sliderSettings}>
          {vehicle.images.map((image, index) => (
            <div style={{padding: "0px", margin: "0px"}} key={index}>
              <img src={image} alt={`${vehicle.name} ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
      <div className="veh-details-con">
        <div className="veh-name">
          <p>{vehicle.brand}</p>
          <p>{vehicle.name}</p>
        </div>
        <div className="veh-details">
          <p className="veh-details-name">Year</p>
          <p className="veh-details-desc">{vehicle.year}</p>
        </div>
        <hr className="veh-details-hr" />
        <div className="veh-details">
          <p className="veh-details-name">Type</p>
          <p className="veh-details-desc">{vehicle.year}</p>
        </div>
        <hr className="veh-details-hr" />
        <div className="veh-details">
          <p className="veh-details-name">Colour</p>
          <p className="veh-details-desc">{vehicle.year}</p>
        </div>
        <hr className="veh-details-hr" />
        <div className="veh-details">
          <p className="veh-details-name">Drive</p>
          <p className="veh-details-desc">{vehicle.year}</p>
        </div>
        <hr className="veh-details-hr" />
        <div className="veh-details">
          <p className="veh-details-name">Transmission</p>
          <p className="veh-details-desc">{vehicle.year}</p>
        </div>
        <hr className="veh-details-hr" />
        <div className="veh-details">
          <p className="veh-details-name">Fuel type</p>
          <p className="veh-details-desc">{vehicle.year}</p>
        </div>
        <hr className="veh-details-hr" />
        <div className="veh-details">
          <p className="veh-details-name">Engine</p>
          <p className="veh-details-desc">{vehicle.year}</p>
        </div>
        <hr className="veh-details-hr" />
        <p className="veh-price">${vehicle.price}</p>
        <button className="veh-details-btn">Make An Inquire</button>
      </div>
    </div>
  );
}
