import React, { useState } from "react";
import vid from "../assets/product_vid.mp4";
import img1 from "../assets/product01.jpg";
import img2 from "../assets/product02.jpg";
import img3 from "../assets/product03.jpg";
import AccordionSection from ".//Accordion";
import TestimonialCarousel from "./Testimonial";

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <>
      <div className="">
        {/* Header */}
        <div className=" text-white p-4 my-12">
          <h1 className="text-lg mx-2 sm:text-4xl font-light">Silhouette No.1 – Vermilion</h1>
        </div>
        {/* Mobile Layout */}
        <div className="lg:hidden bg-[#F7F7F7]">
          {/* Main Product Image */}
          <div className="relative">
            <video
              src={vid}
              autoPlay
              loop
              muted
              className="aspect-[5/5] object-cover"
            ></video>
          </div>

          {/* Product Thumbnails */}
          <div className="flex gap-2 p-4 ">
            <img
              src={img1}
              alt="Red blazer suit"
              className="w-30 h-30 object-cover rounded"
            />
            <img
              src={img2}
              alt="Product view 2"
              className="w-30 h-30 object-cover rounded"
            />
            <img
              src={img3}
              alt="Product view 3"
              className="w-30 h-30 object-cover rounded"
            />
          </div>
          <div className="border mx-4 border-[#D9D9D9]"></div>

          {/* Product Info */}
          <div className="p-4 space-y-6">
            <div className="text-3xl font-bold text-black mt-4">
              ₹ 7,999{" "}
              <span className="text-[#767676] text-xs">
                MRP incl. of all taxes
              </span>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex gap-6 justify-between items-center mb-4">
                <span className="text-lg font-bold text-[#767676]">
                  Please select a size
                </span>
                <span className="text-sm text-[#767676] underline cursor-pointer">
                  Size chart
                </span>
              </div>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border text-xs rounded-md mx-auto ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 bg-[#D9D9D9] text-[#767676] hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-black text-white py-3 font-medium rounded-md">
                Buy
              </button>
              <button className="w-full border-3 border-gray-300 text-black py-3 font-medium rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex w-full">
            {/* Left side - Product Image */}
            <div className="flex-1 relative">
              <div className="sticky top-0">
                <video
                  src={vid}
                  autoPlay
                  loop
                  muted
                  className="aspect-[5/5] object-cover"
                ></video>
              </div>
            </div>

            {/* Right side - Product Details */}
            <div className="flex-1 bg-gray-50 p-8">
              <div className="">
                {/* Product Description */}
                <div className="mb-8 max-w-xl">
                  <p className="text-sm text-black font-extrabold leading-relaxed">
                    A tailored composition in motion. Cut from structured wool
                    with a sculpted shoulder and softened hem, this piece
                    captures presence without force. Worn here in the stillness
                    of a city in motion.
                  </p>
                </div>

                {/* Product Thumbnails */}
                <div className="w-[755px] ">
                  <div className="flex gap-6 mb-8 ">
                    <img
                      src={img1}
                      alt="Product view 1"
                      className="w-60 h-50 object-cover rounded-sm "
                    />
                    <img
                      src={img2}
                      alt="Product view 2"
                      className="w-60 h-50 object-cover rounded-sm"
                    />
                    <img
                      src={img3}
                      alt="Product view 3"
                      className="w-60 h-50 object-cover rounded-sm"
                    />
                  </div>
                  <div className="border-b-2 border-[#D9D9D9] w-auto"></div>
                </div>

                {/* Pricing */}
                <div className="mb-6 ">
                  <div className="text-4xl font-bold text-black mt-12">
                    ₹ 7,999{" "}
                    <span className="text-[#767676] text-sm">
                      MRP incl. of all taxes
                    </span>
                  </div>
                </div>

                {/* Size Selection */}
                <div className=" mb-8">
                  <div className="flex gap-6 items-center mb-4">
                    <span className="text-lg font-bold text-[#767676]">
                      Please select a size
                    </span>
                    <span className="text-sm text-[#767676] underline cursor-pointer">
                      Size chart
                    </span>
                  </div>
                  <div className="flex gap-6">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-8 py-3 border text-md rounded-md ${
                          selectedSize === size
                            ? "border-black bg-black text-white"
                            : "border-gray-300 bg-[#D9D9D9] text-[#767676] hover:border-gray-400"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  <div className="border-b-2 border-[#D9D9D9] w-[755px] my-9"></div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-6 text-xl w-[755px]">
                  <button className="flex-1/2 border-2 border-gray-300 text-black py-4 px-6 font-medium hover:bg-gray-200 transition-all duration-300 cursor-pointer rounded-xl">
                    Add to Cart
                  </button>
                  <button className="flex-2/1 bg-black text-white py-4 font-medium hover:bg-red-600 transition-all duration-300 cursor-pointer rounded-md">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AccordionSection />
        <TestimonialCarousel />
      </div>
    </>
  );
};

export default ProductPage;
