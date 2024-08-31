import React, { useEffect } from "react";
import Slider from "react-slick"; // Import the Slider component
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import allen from "../assets/menbrand/allen.png";
import gucci from "../assets/menbrand/gucci.png";
import laco from "../assets/menbrand/laco.png";
import levi from "../assets/menbrand/levi.png";
import loui from "../assets/menbrand/loui.png";
import pepe from "../assets/menbrand/pepe.png";
import wra from "../assets/menbrand/wra.png";
import denim from "../assets/menbrand/denim.jpeg";
import dis2 from "../assets/dis2.png";
import cal from "../assets/menbrand/cal.jpeg";
import menlist from "./Menslist";
import { BiSolidOffer } from "react-icons/bi";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

const Mens = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 100, // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Animation easing function
      once: true, // Make sure animations happen on every scroll
      
    });

    // Refresh AOS on scroll to repeat animations
    window.addEventListener('scroll', AOS.refresh);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
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
    <div className="men-sec p-8 mt-5 w-full bg-[#bcd3ec] rounded-lg shadow-sm relative">
      {/* Responsive Discount Image in the Right Corner with Reduced Size and AOS animation */}
      <img 
        src={dis2} 
        alt="Discount" 
        className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="200"
      />
    
      <div className="men-sec-head text-3xl font-bold mb-6 text-center text-gray-800">
        Popular Men Brands
      </div>

      {/* Brands Slider */}
      <div className="brands mb-12">
        <Slider {...settings}>
          {[allen, gucci, laco, levi, loui, pepe, wra, denim, cal].map((brand, index) => (
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

      {/* Men's Products Cards */}
      <div className="mens-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
        {menlist.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center bg-white transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover mb-4 rounded"
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

export default Mens;
