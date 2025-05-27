import React, { useState } from "react";
import { ChevronRight, Play } from "lucide-react";
import logo from "/logo.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import vid from "../assets/hero.mp4";

const Hero = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <div className=" text-white mx-2">
      {/* Header */}
      <header className="flex justify-between items-center p-4 md:p-6 lg:p-8">
        <div className="text-2xl md:text-3xl font-light">
          Eclypse<sup className="text-xs">®</sup>
        </div>
        <div className="text-sm text-gray-400">© 2025</div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Main Image */}
          <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Fashion model in red outfit"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-black bg-opacity-70 px-4 py-2 rounded">
              <p className="text-sm">A silhouette worth remembering</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
                Rooted in a philosophy of quiet luxury,
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                our garments are designed to speak softly in cut, in movement,
                in presence.
              </p>
            </div>

            <button className="flex items-center space-x-2 text-left group">
              <span className="text-sm uppercase tracking-wider border-b border-gray-600 group-hover:border-white transition-colors">
                Learn more about Eclypse
              </span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
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
            <video src={vid} autoPlay muted playsInline loop ></video>
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
