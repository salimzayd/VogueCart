import React from "react";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import orign from "../assets/orign.jpeg";
import ret from "../assets/ret.jpeg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
  
        <div>
          <h2 className="text-lg font-bold mb-4">ONLINE SHOPPING</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Men</li>
            <li className="hover:text-gray-400 cursor-pointer">Women</li>
            <li className="hover:text-gray-400 cursor-pointer">Kids</li>
            <li className="hover:text-gray-400 cursor-pointer">Beauty</li>
          </ul>
        </div>

      
        <div>
          <h2 className="text-lg font-bold mb-4">CUSTOMER POLICIES</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Contact us</li>
            <li className="hover:text-gray-400 cursor-pointer">FAQ</li>
            <li className="hover:text-gray-400 cursor-pointer">T&C</li>
            <li className="hover:text-gray-400 cursor-pointer">Track orders</li>
            <li className="hover:text-gray-400 cursor-pointer">Shipping</li>
            <li className="hover:text-gray-400 cursor-pointer">Cancellation</li>
            <li className="hover:text-gray-400 cursor-pointer">Returns</li>
          </ul>
        </div>

    
        <div>
          <h2 className="text-lg font-bold mb-4">USEFUL LINKS</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-400 cursor-pointer">Blog</li>
            <li className="hover:text-gray-400 cursor-pointer">Careers</li>
            <li className="hover:text-gray-400 cursor-pointer">Site map</li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons Section */}
      <div className="mt-8 flex justify-center space-x-6">
        <a  className="text-2xl hover:text-gray-400">
          <FaSquareXTwitter />
        </a>
        <a className="text-2xl hover:text-gray-400">
          <CiInstagram />
        </a>
        <a className="text-2xl hover:text-gray-400">
          <FaWhatsapp />
        </a>
      </div>

      
      <div className="details mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="flex items-center space-x-4">
          <img src={orign} alt="100% Original" className="w-10 h-10" />
          <h3 className="text-sm md:text-base">100% ORIGINAL guarantee for all products at e-shopee.com</h3>
        </div>
        <div className="flex items-center space-x-4">
          <img src={ret} alt="Return within 14 Days" className="w-10 h-10" />
          <h3 className="text-sm md:text-base">Return within 14 days of receiving your order</h3>
        </div>
      </div>

    
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 VogueCart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
