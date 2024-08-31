import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cart from "../assets/kidbrand/cart.jpeg";
import gap from "../assets/kidbrand/gap.jpeg";
import hnna from "../assets/kidbrand/hnna.jpeg";
import hop from "../assets/kidbrand/hop.jpeg";
import little from "../assets/kidbrand/little.jpeg";
import mthr from "../assets/kidbrand/mthr.png";
import kidslist from "./Kidslist"; 

const Kids = () => {
  
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

  
  const brandLogos = [cart, gap, hnna, hop, little, mthr];

  return (
    <div className="kid-sec p-8 mt-5 w-full rounded-lg shadow-lg bg-gradient-to-br from-blue-500 via-teal-400 to-blue-200">
      
      <div className="kid-head text-3xl font-bold mb-6 text-center text-white">
        Popular Kids Brands
      </div>

      
      <div className="kid-brands mb-12">
        <Slider {...settings}>
          {brandLogos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={logo}
                alt={`brand-${index}`}
                className="h-16 w-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>

      
      <div className="kids-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
        {kidslist.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-contain mb-4 rounded-md"
            />
            <h3 className="text-lg font-bold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-red-500 line-through mb-1">₹{item.prevprice}</p>
            <p className="text-green-600 font-semibold flex items-center">
              <span className="mr-1">Offer:</span> ₹{item.offerprice}
            </p>
            <p className="text-gray-500 mt-2">{item.category}</p>
          </div>
        ))}
      </div>

    
      <div className="more-btn flex justify-center mt-8">
        <button className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Kids;
