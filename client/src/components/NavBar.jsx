import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm shadow-lg h-auto">
      <div className="flex items-center justify-between px-4 py-3 sm:py-3 sm:mx-6 mx-2">
        <img src={logo} alt="Logo" className="h-8 w-10 rounded-sm" />
        <ul className="flex flex-wrap items-center justify-end gap-5 sm:gap-6 text-sm sm:text-lg">
          {["About Us", "Waitlist", "Cart"].map((item, i) => (
            <li key={i}>
              <a
                href="#"
                className="text-white hover:text-blue-800 transition-all duration-300"
              >
                {item}
              </a>
            </li>
          ))}
          <li className="bg-white text-black px-4 sm:px-5 mr-1 py-1 rounded-sm hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer">
            Buy
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
