import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2f2f2f]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-white"
      >
        <span className="text-base sm:text-lg font-light text-left">
          {title}
        </span>
        <AiOutlineArrowDown
          className={`w-5 h-5 transform transition-transform duration-300 text-white ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="text-sm sm:text-base text-gray-300 pb-5 px-1 sm:px-2">
          {children || "This is the hidden content."}
        </div>
      )}
    </div>
  );
};

export default function AccordionSection() {
  return (
    <div className=" text-white w-full max-w-3xl sm:max-w-full mx-auto px-4 sm:px-6 md:px-8 mt-7 mb-5">
      <AccordionItem title="Size & Fit" />
      <AccordionItem title="Delivery & Returns" />
      <AccordionItem title="How This Was Made" />
    </div>
  );
}
