import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

export default function ShippingAddressForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    aptNumber: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveAddress = () => {
    console.log("Saving address:", formData);
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  const handlePlaceOrder = () => {
    console.log("Placing order");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NavBar */}
      <nav className="w-full shadow-lg">
        <div className="flex items-center justify-between px-4 py-3 sm:py-3 sm:mx-6 mx-2">
          <img src={logo} alt="Logo" className="h-8 w-10 rounded-sm" />
          <ul className="flex flex-wrap items-center justify-end gap-5 sm:gap-12 text-sm sm:text-lg">
            <a
              href="/"
              className="text-[#575757] hover:text-cyan-500 transition-all duration-300 cursor-pointer"
            >
              About Us
            </a>
            <a
              href="/"
              className="text-[#575757] hover:text-cyan-500 transition-all duration-300 cursor-pointer"
            >
              Waitlist
            </a>
            <li className="text-black border-b-2 hover:text-cyan-500 transition-all duration-300 cursor-pointer">
              Cart
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-full mx-auto px-4 sm:px-20 py-14">
        <div className="flex flex-col lg:flex-row lg:gap-8 ">
          {/* Address Form Section */}
          <div className="flex-1 lg:max-w-4xl ">
            {/* Back Button */}
            <button className="flex gap-5 items-center text-gray-900 mb-6 hover:text-gray-700">
              <ChevronLeft
                onClick={() => {
                  navigate("/");
                }}
                className="w-7 h-7 mr-1 cursor-pointer"
              />
              <span className="font-medium md:text-xl">Shipping Address</span>
            </button>

            {/* Form Card */}
            <div className="bg-white rounded-lg border-2 border-[#C3C3C3] p-6 md:p-9 md:py-16">
              <div className="flex items-center mb-6">
                <div className="w-7 h-7 border-2 border-red-500 rounded-full flex items-center justify-center mr-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <span className="font-medium text-gray-900 md:text-xl">
                  Add New Address
                </span>
              </div>

              <form className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  <div className="">
                    <label className="block text-sm font-medium text-black mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Street Address */}
                <div>
                  <label className="block text-sm font-medium text-black mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                {/* Address Details */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Apt Number
                    </label>
                    <input
                      type="text"
                      name="aptNumber"
                      value={formData.aptNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Zip
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="button"
                    onClick={handleSaveAddress}
                    className="md:order-2  flex-1 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 font-medium cursor-pointer transition-all duration-300"
                  >
                    Save This Address
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className=" flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 font-medium cursor-pointer transition-all duration-300"
                  >
                    cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary Section */}
          <div className="mt-8 md:mt-12 lg:w-lg md:p-3 bg-[#F0F0F0] rounded-md">
            {/* Privacy Notice */}
            <div className=" mt-4 mb-4  text-gray-600  mx-6">
              <div className="w-xs md:w-md text-sm md:text-[18px]">
                <h3>By placing your order, you agree to our company</h3>{" "}
                <span className="font-medium text-gray-900">
                  Privacy policy
                </span>{" "}
                and{" "}
                <span className="font-medium text-gray-900">
                  Conditions of use.
                </span>
              </div>
              <div className="border-b mt-6 w-full"></div>
            </div>

            {/* Order Summary Card */}
            <div className=" rounded-lg p-6">
              <h3 className="font-medium md:text-xl text-gray-900 mb-6 ">
                Order Summary
              </h3>

              <div className="space-y-3 mb-12">
                <div className="flex justify-between text-sm">
                  <span className="text-[#575757]">
                    Items - Silhouette No. ermillion
                  </span>
                  <span className="text-[#575757]">7,999</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#575757]">Shipping and handling:</span>
                  <span className="text-[#575757]">200</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#575757]">Before tax:</span>
                  <span className="text-[#575757]">6,599</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#575757]">Tax Collected:</span>
                  <span className="text-[#575757]">1,400</span>
                </div>
              </div>
              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">
                    Order Total:
                  </span>
                  <span className="font-bold text-xl text-gray-900">8,199</span>
                </div>
              </div>
              <div className="md:w-[410px] md:mx-auto">
                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-4 bg-black text-white  rounded-md hover:bg-gray-800 font-medium cursor-pointer transition-all duration-300"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
