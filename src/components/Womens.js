import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import jockey from "../assets/womenbrn/jockey.png";
import levis from "../assets/womenbrn/levis.png";
import only from "../assets/womenbrn/only.jpeg";
import triumph from "../assets/womenbrn/triumph.png";
import van from "../assets/womenbrn/van.png";
import zara from "../assets/womenbrn/zara.png";
import hm from "../assets/womenbrn/hm.jpg";
import vers from "../assets/womenbrn/vers.jpeg";
import prada from "../assets/womenbrn/prada.jpeg";
import { BiSolidOffer } from "react-icons/bi";
import dis3 from "../assets/dis3.jpg";
import womenlist from "./Womenlist";
import AOS from "aos";
import "aos/dist/aos.css";

const Women = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // To allow animation to happen more than once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="women-sec p-8 mt-5 w-full bg-[#f9f1e7] rounded-lg shadow-sm">
      {/* Header Section with Discount Image */}
      <div className="women-sec-head flex justify-center items-center mb-6 relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mr-4">
          Popular Women Brands
        </h2>
        {/* Discount Image with AOS Animation */}
        <img
          src={dis3}
          alt="Discount"
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
          data-aos="zoom-out-up"
          style={{ marginLeft: "10px" }}
        />
      </div>

      {/* Brands Slider */}
      <div className="brands mb-12">
        <Slider {...settings}>
          {[jockey, levis, only, triumph, van, zara, hm, vers, prada].map(
            (brand, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={brand}
                  alt={`brand-${index}`}
                  className="h-24 w-24 object-contain"
                />
              </div>
            )
          )}
        </Slider>
      </div>

      {/* Women's Products Cards */}
      <div className="women-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
        {womenlist.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-80 w-full object-contain mb-4 rounded-lg"
            />
            <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-red-500 line-through mb-1">₹{item.prevprice}</p>
            <p className="text-green-600 font-semibold flex items-center">
              <BiSolidOffer className="mr-1 text-green-600" />
              ₹{item.offerprice}
            </p>
            <p className="text-gray-500 mt-2">{item.category}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="more-btn flex justify-center mt-8">
        <button className="px-6 py-2 bg-green-400 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Women;
