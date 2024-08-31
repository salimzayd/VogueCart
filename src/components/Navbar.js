import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsListCheck } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 flex flex-col md:flex-row items-center justify-between p-2 bg-gray-500 shadow-md">
      
    
      <div className="flex items-center text-xl font-bold cursor-pointer mb-2 md:mb-0 ml-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">
        VogueCart <img src={cart} alt="cart" className="h-6 w-6 object-contain ml-2" />
      </div>
      
    
      <div className="md:hidden flex items-center">
        <FaBars className="text-white text-2xl cursor-pointer" onClick={toggleMenu} />
      </div>

      
      <div className={`flex-col md:flex-row items-center md:space-x-6 mb-2 md:mb-0 mr-4 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
        <ol className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-6 text-white mt-2 pt-2 pr-15">
          <li className="cursor-pointer hover:text-black" onClick={() => navigate("/")}>Home</li>
          <li className="cursor-pointer hover:text-black" onClick={() => navigate("/men")}>Men</li>
          <li className="cursor-pointer hover:text-black" onClick={() => navigate('/women')}>Women</li>
          <li className="cursor-pointer hover:text-black" onClick={() => navigate('/kids')}>Kids</li>
          <li className="cursor-pointer hover:text-black" onClick={() => navigate('/products')}>Products</li>
        </ol>
        
        <div className="flex items-center mb-2 md:mb-0">
          <div className="relative flex items-center">
            <input
              type="search"
              name="search"
              className="w-60 md:w-80 p-1 pl-10 border border-gray-300 rounded-md focus:outline-none focus:border-orange-500"
              placeholder="Search... for men, women & more"
            />
            <IoIosSearch className="absolute right-3 text-gray-500" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-6 relative">
          <ol className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4 text-white mr-4">
            <li
              className="cursor-pointer flex items-center hover:text-black relative"
              onClick={toggleProfileDropdown}
            >
              <CgProfile className="mr-1" />
              Profile
            
              {isDropdownOpen && (
                <ul className="absolute top-8 right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg py-2">
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-800">
                    Login
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-800">
                    Settings
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:bg-gray-800">
                    Contact Us
                  </li>
                </ul>
              )}
            </li>
            <li className="cursor-pointer flex items-center hover:text-black">
              <BsListCheck className="mr-1" />
              Wishlist
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
