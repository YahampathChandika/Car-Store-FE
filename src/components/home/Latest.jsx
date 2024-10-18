// Latest.js
import React, { useState } from "react";
import "../../assets/css/Latest.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useGetLatestVehiclesQuery } from "../../store/api/vehiclesApi";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      className="material-symbols-outlined arrow left"
      onClick={(event) => {
        event.stopPropagation();
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
        event.stopPropagation();
        onClick();
      }}
    >
      keyboard_arrow_right
    </span>
  );
};

export default function Latest() {
  const [hovered, setHovered] = useState(null);
  const { data, error, isLoading } = useGetLatestVehiclesQuery();
  const vehicleData = data?.payload;
  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load vehicles!</p>;

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  arrows: hovered !== null,
  adaptiveHeight: true, // Ensures content size adjusts properly
  swipeToSlide: true,   // Allows smoother sliding
};


  return (
    <div className="latest-container">
      <h2 className="latest-title">Latest Arrivals</h2>
      <hr className="latest-hr" />
      <div className="vehicle-grid">
        {vehicleData.map((vehicle) => (
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
                  <img src={image} alt={`${vehicle.name} ${index}`} />
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
      <button onClick={() => navigate("showroom")} className="latest-btn">
        View Showroom
      </button>
    </div>
  );
}
