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

const cars = [
  {
    id: 1,
    brand: "Bugatti",
    name: "Chiron",
    year: 2021,
    price: "$3,000,000",
    images: [
      "https://img.jamesedition.com/listing_images/2024/08/26/15/40/39/e741fa0a-15f4-437f-bfb7-b625bed89380/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/08/26/15/40/39/400e4232-adfe-4019-ab93-b3e297c6fdcf/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/08/26/15/40/39/5926cc07-2436-458c-9031-deb098a4071a/je/556x342xcxm.jpg",
    ],
  },
  {
    id: 2,
    brand: "Ferrari",
    name: "488 Spider",
    year: 2020,
    price: "$280,000",
    images: [
      "https://img.jamesedition.com/listing_images/2024/10/11/16/03/13/837b1ab4-a6de-4422-83af-4f6f08950d07/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/11/16/03/13/e3b1959c-4fb0-4950-b04c-a812fe266ed1/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/11/16/03/13/d39b2678-f9e8-4a82-9125-5c11324610a1/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/11/16/03/13/86eb0d45-7cfa-46e6-8f9e-06a70be5116b/je/556x342xcxm.jpg",
    ],
  },
  {
    id: 3,
    brand: "Lamborghini",
    name: "Aventador",
    year: 2022,
    price: "$400,000",
    images: [
      "https://img.jamesedition.com/listing_images/2024/10/09/16/07/44/17fa93a6-7766-4d16-98df-c3cf21d0363a/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/09/16/07/44/c3323729-e080-45e5-90e6-63e75b4587b7/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/09/16/07/44/d4a99cc8-0610-45cc-89ff-6ef62b52cbcf/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/09/16/07/44/e051d8c7-4fbf-49f5-b67a-6af010bd61f9/je/556x342xcxm.jpg",
    ],
  },
  {
    id: 4,
    brand: "Porsche",
    name: "911 Turbo",
    year: 2023,
    price: "$680,000",
    images: [
      "https://img.jamesedition.com/listing_images/2024/07/23/07/40/05/2c74dbc3-4bb3-4983-a169-333805598c97/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/07/23/07/40/06/8a1a9bc8-a046-449c-9145-0f0687a640a3/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/07/23/07/40/07/cf17b269-1b5b-4316-971d-3ee183b6d0e3/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/07/23/07/40/05/3450c6cd-e70c-471a-bcb3-8c54227f7011/je/556x342xcxm.jpg",
    ],
  },
  {
    id: 5,
    brand: "Koenigsegg",
    name: "Regera",
    year: 2022,
    price: "$980,000",
    images: [
      "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/cc4468f9-8bf0-457e-88f7-11ceade075e1/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/9a5316b2-d903-44ca-8990-5806ae7b5f0a/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/c9af28fe-00ae-4b84-b48c-c591e598f916/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2024/10/01/14/46/52/f415104b-ebaf-4c9d-bbbb-580ad9060201/je/556x342xcxm.jpg",
    ],
  },
  {
    id: 6,
    brand: "Rolls-Royce",
    name: "Phantom",
    year: 2023,
    price: "$880,000",
    images: [
      "https://img.jamesedition.com/listing_images/2023/11/15/14/09/52/a312af54-740f-4365-aeac-641a1bf3f567/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2023/11/15/14/09/51/538751e9-75a0-4378-869b-d6a56d9a4cba/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2023/11/15/14/09/52/1efc1200-6dd1-42da-82ef-c93bd0144672/je/556x342xcxm.jpg",
      "https://img.jamesedition.com/listing_images/2023/11/15/14/09/52/80e26d03-dc61-4411-abda-ec5dbe5e6e1d/je/556x342xcxm.jpg",
    ],
  },
];

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

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load vehicles!</p>;

  const { cars, pagination } = data?.payload;

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
      <div className="vehicle-grid showroom-card-con">
        {cars.map((vehicle) => (
          <div
            key={vehicle.id}
            className="vehicle-card"
            onMouseEnter={() => setHovered(vehicle.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => navigate("/vehicle")}
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
      <Pagination
        count={pagination.totalPages}
        page={pagination.currentPage}
        onChange={handlePageChange}
        variant="outlined"
        size="large"
        shape="rounded"
      />
    </div>
  );
}
