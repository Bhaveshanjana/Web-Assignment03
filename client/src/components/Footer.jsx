import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MdOutlineArrowUpward } from "react-icons/md";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className=" text-white py-8 sm:py-12 lg:py-16 p-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-start">
          {/* Left Side - Logo and Navigation */}
          <div className="flex">
            {/* Logo */}
            <div className="mb-12 sm:mb-8 lg:mb-12">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light flex">
                Eclypse
                <span className="text-xs sm:text-sm lg:text-base">
                  <MdOutlineArrowOutward />
                </span>
              </h1>
              {/* Navigation Links */}
              <nav className="space-y-2 sm:space-y-3 lg:space-y-2 flex flex-col mt-12">
                <div className="flex ">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <a
                      href="#"
                      className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors"
                    >
                      Home
                    </a>
                    <span className="text-gray-500 text-xs sm:text-sm">/</span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <a
                      href="#"
                      className="text-sm sm:text-base ml-2 sm:ml-5 lg:text-lg text-gray-300 hover:text-white transition-colors"
                    >
                      About
                    </a>
                    <span className="text-gray-500 text-xs sm:text-sm">/</span>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <a
                      href="#"
                      className="text-sm sm:text-base ml-2 sm:ml-5 lg:text-lg text-gray-300 hover:text-white transition-colors"
                    >
                      Buy
                    </a>
                    <span className="text-gray-500 text-xs sm:text-sm">/</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="#"
                    className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Our Customers
                  </a>
                  <span className="text-gray-500 text-xs sm:text-sm">/</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <a
                    href="#"
                    className="text-sm sm:text-base lg:text-lg text-gray-300 hover:text-white transition-colors"
                  >
                    Contacts
                  </a>
                </div>
              </nav>
            </div>

            {/*Contact Information */}
            <div className="">
              <div className=" mt-6 sm:px-8 sm:mt-8 lg:px-12">
                {/* Contact Section */}
                <div className="mb-9 sm:mb-8 lg:mb-10">
                  <p className="text-xs sm:text-xs tracking-widest text-gray-400 uppercase  ">
                    Contact
                  </p>
                  <a
                    href="tel:+911234567890"
                    className="text-xs sm:text-lg font-light hover:text-gray-300  transition-colors"
                  >
                    +91123-456-7890
                  </a>
                </div>

                {/* Email Section */}
                <div>
                  <p className="text-xs pt-3 md:pt-7 tracking-widest text-gray-400 uppercase ">
                    Email
                  </p>
                  <a
                    href="mailto:eclypse@gmail.com"
                    className="text-xs opacity-80 font-light hover:text-gray-300 transition-colors"
                  >
                    eclypse@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Scroll to Top Button and Copyright */}
          <div className="flex flex-col items-end  h-full ml-4">
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 ml-6 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors mb-4 sm:mb-6 lg:mb-8 cursor-pointer"
              aria-label="Scroll to top"
            >
              <MdOutlineArrowUpward className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Copyright */}
            <div className="text-right ">
              <p className="text-xs mt-16 sm:mt-19 sm:text-sm text-gray-500">
                © Eclypse 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
