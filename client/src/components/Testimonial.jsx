import React, { useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { Quote, ChevronLeft } from "lucide-react";
import img1 from "../assets/Testimonial01.jpg";
import img2 from "../assets/Testimonial02.jpg";
import img3 from "../assets/Testimonial03.jpg";

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 0,
      quote: "Understated, but unforgettable. It feels like it was made for me",
      author: "Random Woman",
      location: "NY, USA",
      avatar: img1,
    },
    {
      id: 1,
      quote:
        "The quality is exceptional and the fit is perfect. I get compliments every time I wear it.",
      author: "Sarah Johnson",
      location: "CA, USA",
      avatar: img2,
    },
    {
      id: 2,
      quote:
        "This piece transformed my entire wardrobe. It's versatile and incredibly well-made.",
      author: "Emily Chen",
      location: "TX, USA",
      avatar: img3,
    },
  ];

  return (
    <>
      <div className="text-white flex items-center p-3">
        <div className=" px-2 container mx-auto lg:px-8">
          {/* Header */}
          <div className="mb-12 sm:mb-6 lg:mb-16 mt-6 sm:mt-8 lg:mt-12">
            <p className="text-xs sm:text-xl tracking-widest text-gray-400 uppercase">
              Our Customers
            </p>
          </div>

          <div className="flex flex-row justify-between mb-6 sm:mb-9 ">
            {/* Testimonial Content */}
            <div className="flex-1 pr-4 lg:pr-16 -translate-y-4 ">
              {/* Quote */}
              <div className="mb-4 sm:mb-6 lg:mb-16  w-52 md:w-xl lg:3xl">
                <div className="text-sm sm:text-xl md:text-2xl lg:text-5xl font-light leading-tight mb-2 ml-2 sm:ml-4 lg:ml-8 flex gap-2 sm:gap-3 lg:gap-4 items-start">
                  <span className="text-white flex-shrink-0 mt-1">
                    <BiSolidQuoteLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 " />
                  </span>
                  <span className="flex-1 ">
                    {testimonials[activeIndex].quote}
                  </span>
                </div>
              </div>

              {/* Author Info */}
              <div className="mb-0 ml-2 sm:ml-4 lg:ml-22">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-1">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-gray-400">
                  {testimonials[activeIndex].location}
                </p>
              </div>
            </div>

            {/* Right Side - User Avatars */}
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 mx-1 lg:mx-3">
              {/* User Avatars */}
              <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 ">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveIndex(index)}
                    className={`relative transition-all duration-300 cursor-pointer ${
                      index === activeIndex ? "" : "opacity-60 hover:opacity-80"
                    }`}
                    aria-label={`View testimonial from ${testimonial.author}`}
                  >
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className={`rounded-full transition-all duration-300 object-cover ${
                        index === activeIndex
                          ? "w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-14 lg:w-20 lg:h-20  "
                          : "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 "
                      }`}
                    />
                    {index === activeIndex && (
                      <ChevronLeft className="absolute -left-8 sm:-left-5 md:-left-9 lg:-left-8  top-1/2 -translate-y-1/2 text-sm sm:text-base md:text-lg lg:text-2xl " />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-[#3D3D3D] mt-20"></div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
