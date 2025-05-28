import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = ({ productRef }) => {

  const handleBuyClick = () => {
    productRef?.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-lg h-auto">
      <div className="flex items-center justify-between px-2 py-3 sm:py-3 sm:mx-6 mx-2">
        <img src={logo} alt="Logo" className="h-8 w-10 rounded-sm" />
        <ul className="flex flex-wrap items-center justify-end gap-6 sm:gap-16 text-xs  sm:text-lg">
          <li className="text-white hover:text-blue-800 transition-all duration-300 cursor-pointer">
            About Us
          </li>
          <li className="text-white hover:text-blue-800 transition-all duration-300 cursor-pointer">
            Waitlist
          </li>
          <li>
            <Link
              to="/cart"
              className="text-white hover:text-blue-800 transition-all duration-300 cursor-pointer"
            >
              Cart
            </Link>
          </li>
          <button
            onClick={handleBuyClick}
            className="bg-white text-black px-4 sm:px-7 mr-1 py-1 rounded-sm hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer"
          >
            Buy
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
