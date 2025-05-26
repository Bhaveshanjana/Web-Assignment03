import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div>
      <div className="bg-black flex justify-between py-3">
        <img src={logo} alt="" className="h-9 w-11 ml-2" />
        <ul className="flex items-center gap-4 mx-4 text-[15px]">
          {["About Us", "Waitlist", "Cart"].map((item, i) => (
            <li key={i}>
              <a href="" className="text-white">
                {item}
              </a>
            </li>
          ))}
          <li className="bg-white px-3 rounded-sm py-1 hover:bg-red-500 transition-all duration-200 hover:text-white cursor-pointer">
            Buy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
