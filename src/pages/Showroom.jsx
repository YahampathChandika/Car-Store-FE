import React, { useState } from "react";
import "../assets/css/Showroom.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import {
  useGetBrandsQuery,
  useGetVehiclesWithPaginationQuery,
  useGetVehiclesByBrandQuery,
} from "../store/api/vehiclesApi";
import { Grid } from "react-loader-spinner";
import Footer from "../components/common/Footer";

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      className="material-symbols-outlined arrow left"
      onClick={(event) => {
        event.stopPropagation();
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
        event.stopPropagation();
        onClick();
      }}
    >
      keyboard_arrow_right
    </span>
  );
};

export default function Showroom() {
  const [hovered, setHovered] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrandId, setSelectedBrandId] = useState(null);
  const navigate = useNavigate();
  const { data: brands } = useGetBrandsQuery();

  const { data, error, isLoading } = selectedBrandId
    ? useGetVehiclesByBrandQuery(selectedBrandId, currentPage)
    : useGetVehiclesWithPaginationQuery(currentPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
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
    adaptiveHeight: true,
    swipeToSlide: true,
  };

  return (
    <>
      <div className="showroom-container">
        <h2 className="showroom-title">SHOWROOM</h2>
        <hr className="showroom-hr" />
        <div className="hero-logo-container">
          {brands?.payload.map((brand) => (
            <div
              key={brand.id}
              className={`hero-logo-box ${
                selectedBrandId === brand.id ? "active" : ""
              }`} // Apply active class
              onClick={() => {
                // Toggle the selected brand
                setSelectedBrandId(
                  selectedBrandId === brand.id ? null : brand.id
                );
                setCurrentPage(1);
              }}
            >
              <img
                className="hero-logo-img"
                src={brand.brandImage}
                alt={brand.brandName}
              />
            </div>
          ))}
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
                  <div>
                    <h3>{vehicle.brandName}</h3>
                    <p>
                      {vehicle.carName} - {vehicle.manufacturingYear}
                    </p>
                    <p className="price">${vehicle.price}</p>
                  </div>
                  <img src={vehicle.brandImage} alt={vehicle.brandName} />
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
      <Footer />
    </>
  );
}
