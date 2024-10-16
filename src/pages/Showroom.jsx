// showroom.js
import React, { useState } from "react";
import "../assets/css/Showroom.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import bugatti from "../assets/images/bugatti-logo.png";
import ferrari from "../assets/images/ferrari-logo.png";
import McLaren from "../assets/images/McLaren-logo.png";
import lamborghini from "../assets/images/lamborghini-logo.png";
import porsche from "../assets/images/porsche-logo.png";
import rolls from "../assets/images/rolls-royce-logo.png";
import Brabus from "../assets/images/Brabus-Logo.png";
import maserati from "../assets/images/maserati-logo.png";
import koenigsegg from "../assets/images/koenigsegg-logo.png";
import pagani from "../assets/images/pagani-logo.png";
import benz from "../assets/images/mercedes-benz-logo.png";
import { Pagination } from "@mui/material";
import { useGetVehiclesWithPaginationQuery } from "../store/api/vehiclesApi";
import { Grid } from "react-loader-spinner";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      className="material-symbols-outlined arrow left"
      onClick={(event) => {
        event.stopPropagation(); // Prevent event propagation to the parent card
        onClick();
      }}
    >
      keyboard_arrow_left
    </span>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      className="material-symbols-outlined arrow right"
      onClick={(event) => {
        event.stopPropagation(); // Prevent event propagation to the parent card
        onClick();
      }}
    >
      keyboard_arrow_right
    </span>
  );
};

export default function Latest() {
  const [hovered, setHovered] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const { data, error, isLoading } =
    useGetVehiclesWithPaginationQuery(currentPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page); // Set the current page when pagination changes
  };

  const cars = data?.payload?.cars || [];
  const pagination = data?.payload?.pagination || {
    totalPages: 1,
    currentPage: 1,
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    arrows: hovered !== null,
  };

  return (
    <div className="showroom-container">
      <h2 className="showroom-title">SHOWROOM</h2>
      <hr className="showroom-hr" />
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

      {isLoading && (
        <div className="spinner-container">
          <Grid
            height="80"
            width="80"
            radius="9"
            color="#B68D40"
            ariaLabel="three-dots-loading"
          />
        </div>
      )}

      {error && (
        <div className="error-message">
          <p>Failed to load vehicles. Please try again later.</p>
        </div>
      )}

      {!isLoading && !error && (
        <div className="vehicle-grid showroom-card-con">
          {cars.map((vehicle) => (
            <div
              key={vehicle.id}
              className="vehicle-card"
              onMouseEnter={() => setHovered(vehicle.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(`/vehicle/${vehicle.id}`)}
              >
              <Slider {...sliderSettings}>
                {vehicle.CarPhotos.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`${vehicle.carName} ${index}`} />
                  </div>
                ))}
              </Slider>
              <div className="vehicle-info">
                <h3>{vehicle.brandName}</h3>
                <p>
                  {vehicle.carName} - {vehicle.manufacturingYear}
                </p>
                <p className="price">${vehicle.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && !error && (
        <Pagination
          count={pagination.totalPages}
          page={pagination.currentPage}
          onChange={handlePageChange}
          variant="outlined"
          size="large"
          shape="rounded"
        />
      )}
    </div>
  );
}
