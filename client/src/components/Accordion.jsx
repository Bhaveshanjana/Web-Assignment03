import { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2f2f2f] p-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-white"
      >
        <span className="text-base sm:text-3xl font-light text-left sm:my-5 sm:mt-9">
          {title}
        </span>
        <AiOutlineArrowDown
          className={`w-8 h-7 sm:w-12 sm:h-9 transform transition-transform duration-300 text-white ${
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
    <div className=" text-white w-full max-w-3xl sm:max-w-full mx-auto px-4 sm:px-6 md:px-8 mt-12 mb-5">
      <AccordionItem title="Size & Fit" />
      <AccordionItem title="Delivery & Returns" />
      <AccordionItem title="How This Was Made" />
    </div>
  );
}
