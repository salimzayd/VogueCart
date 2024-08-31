import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import balen from "../assets/prdctbrnd/balen.png";
import bur from "../assets/prdctbrnd/bur.png";
import casi from "../assets/prdctbrnd/casi.png";
import cat from "../assets/prdctbrnd/cat.png";
import chan from "../assets/prdctbrnd/chan.png";
import dior from "../assets/prdctbrnd/dior.png";
import lore from "../assets/prdctbrnd/lore.png";
import role from "../assets/prdctbrnd/role.png";
import vans from "../assets/prdctbrnd/vans.jpeg";
import productlist from "../components/Productlist"; 
import { BiSolidOffer } from "react-icons/bi";

const Product = () => {
  
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
    <div className="main-prd p-8 mt-5 w-full rounded-lg shadow-lg bg-yellow-200">

      <div className="prd-head text-3xl font-bold mb-6 text-center text-gray-800">
        Brand Products
      </div>

      
      <div className="brands-carousel mb-12">
        <Slider {...settings}>
          {[balen, bur, casi, cat, chan, dior, lore, role, vans].map((brand, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={brand}
                alt={`brand-${index}`}
                className="h-24 w-24 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>

      
      <div className="product-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
        {productlist.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-80 object-contain mb-4 rounded-lg"
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

      
      <div className="more-btn flex justify-center mt-8">
        <button className="px-6 py-2 bg-green-400 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Product;
