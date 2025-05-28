import React, { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import logo from "/logo.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import vid from "../assets/hero.mp4";
import vid2 from "../assets/hero02.mp4";
import NavBar from "./NavBar";

const Hero = ({productRef} ) => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className=" text-white mx-2 sm:w-full sm:mx-auto ">
      {/* Navbar */}
      <NavBar productRef={productRef}/>

      {/* Header */}
      <header className=" p-4 md:p-6 lg:p-8 mt-18">
        <div className=" font-light tracking-wider flex justify-between items-center">
          <div className="text-2xl md:text-7xl">
            <h1>
              Eclypse
              <span className=" font-extralight opacity-70 text-xs sm:text-4xl align-super">
                ®
              </span>
            </h1>
          </div>
          <div>
            <p className="text-sm sm:text-lg text-gray-400 sm:translate-y-9 translate-y-2">
              ©<span className="text-white ml-1">2025</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4  sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 w-full  gap-8 lg:gap-12 mb-12 lg:mb-20">
          {/* Main Image */}
          <div className="">
            {/* Video Section */}
            <div className="relative overflow-hidden rounded-lg ">
              <video
                src={vid2}
                autoPlay
                loop
                muted
                playsInline
                className="w-full sm:h-[80vh] object-cover"
              ></video>

              {/* Text Overlay */}
              <div className="absolute bottom-1 right-3 sm:bottom-3 sm:right-6 text-white">
                <p className="text-sm sm:text-4xl font-light ">
                  A silhouette worth remembering
                </p>
              </div>
            </div>

            {/* Content Below the Video */}
            <div className=" text-white text-start py-10 space-y-4 mt-12 ">
              <p className="text-base sm:text-4xl font-light leading-relaxed">
                Rooted in a philosophy of quiet luxury, <br />
                our garments are designed to speak <br />
                softly in cut, in movement, in presence.
              </p>
              <a
                href="#"
                className="flex justify-start w-fit gap-4  border-b border-white text-lg sm:text-2xl hover:opacity-80 transition mt-16"
              >
                Learn more aout Eclypse{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-9 mb-12 ">
          {/* Street Scene */}
          <div
            className="col-span-3 aspect-[16/7] relative overflow-hidden rounded-sm cursor-pointer"
            onMouseEnter={() => setHoveredImage("street")}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <video src={vid} autoPlay muted playsInline loop></video>
          </div>
          <div
            className="w-full aspect-square md:aspect-auto  relative overflow-hidden rounded-lg cursor-pointer hidden md:block"
            onMouseEnter={() => setHoveredImage("fabric")}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={img1}
              alt="Red fabric texture"
              className="w-full h-full object-cover "
            />
            {/* Text Overlay */}
            <div
              className={`absolute inset-0 bg-[#735959a4] flex items-end p-4 transition-opacity duration-500 ${
                hoveredImage === "fabric" ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white text-4xl mb-6 font-semibold">
                Premium wool blend in
                <br />
                Signature vermiliom
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-7">
          {/* Fabric Detail */}
          <div
            className="w-full aspect-square md:aspect-auto relative overflow-hidden rounded-lg cursor-pointer md:hidden"
            onMouseEnter={() => setHoveredImage("fabric")}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={img1}
              alt="Red fabric texture"
              className={`w-full h-full object-cover transition-transform duration-500 ${
                hoveredImage === "fabric" ? "scale-105" : ""
              }`}
            />
          </div>
          {/* Garment Detail */}
          <div
            className="w-full aspect-square relative overflow-hidden rounded-lg cursor-pointer group"
            onMouseEnter={() => setHoveredImage("detail")}
            onMouseLeave={() => setHoveredImage(null)}
          >
            {/* Image */}
            <img
              src={img2}
              alt="Fashion detail"
              className="w-full h-full object-cover "
            />

            {/* Text Overlay */}
            <div
              className={`absolute inset-0 bg-[#735959a4] flex items-end p-4 transition-opacity duration-500 ${
                hoveredImage === "detail" ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white text-4xl mb-6 font-semibold">
                Discreet side pockets
                <br />
                with clean finish
              </p>
            </div>
          </div>

          {/* Interior Scene */}
          <div
            className="w-full aspect-square relative overflow-hidden rounded-lg cursor-pointer col-span-1"
            onMouseEnter={() => setHoveredImage("interior")}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={img3}
              alt="interior scene"
              className="w-full h-full object-cover"
            />
            {/* Text Overlay */}
            <div
              className={`absolute inset-0 bg-[#735959a4] flex items-end p-4 transition-opacity duration-500  ${
                hoveredImage === "interior" ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-white text-4xl mb-6 font-semibold">
                Hands-Cut and
                <br />
                Assembled in small
                <br />
                Batches
              </p>
            </div>
          </div>

          {/* Logo */}
          <div
            className="w-full aspect-square relative overflow-hidden rounded-lg cursor-pointer hidden md:block col-span-1"
            onMouseEnter={() => setHoveredImage("logo")}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
            {/* Text Overlay */}
            <div className="absolute inset-0 hover:bg-black bg-opacity-80 flex items-center justify-center p-4">
              <p
                className={`text-white text-7xl  mb-6 font-semibold transform transition-opacity duration-500 ${
                  hoveredImage === "logo" ? "opacity-100" : "opacity-0 "
                }`}
              >
                Eclypse{" "}
                <span className="font-extralight text-5xl absolute">®</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
