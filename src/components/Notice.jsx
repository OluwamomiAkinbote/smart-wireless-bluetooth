import React from "react";
import { FaExclamationTriangle, FaPhone, FaClock, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

const Notice = () => {
  return (
    <div className="border-l-4 border-yellow-400 bg-gray-900 bg-opacity-50 backdrop-blur-sm p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 sm:w-24 h-16 sm:h-24 bg-yellow-400 rounded-full opacity-10"></div>
      <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 w-20 sm:w-32 h-20 sm:h-32 bg-yellow-400 rounded-full opacity-5"></div>
      
      <div className="flex flex-col xs:flex-row items-start gap-3 sm:gap-4 relative z-10">
        {/* Icon Container - Responsive */}
        <div className="flex-shrink-0 p-2 sm:p-3 bg-yellow-400 bg-opacity-20 rounded-full self-start">
          <FaExclamationTriangle className="text-yellow-400 text-lg sm:text-xl" />
        </div>
        
        <div className="w-full">
          {/* Heading with responsive text and badge */}
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex flex-wrap items-center gap-2">
            How We Deliver Your Goods
            <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">IMPORTANT NOTICE</span>
          </h3>
          
          {/* List with responsive spacing and text */}
          <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
            <li className="flex items-start gap-2 sm:gap-3">
              <FaCheckCircle className="text-yellow-400 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
              <span>Only order when you dey ready to collect your package immediately</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <FaPhone className="text-yellow-400 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
              <span>Make your phone no dey switch off when rider dey come</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <FaClock className="text-yellow-400 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
              <span>If we no fit reach you, we go cancel the order after 3 attempts</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <FaMoneyBillWave className="text-yellow-400 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
              <span>Prepare correct cash or transfer before rider arrive</span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <FaExclamationTriangle className="text-yellow-400 mt-0.5 sm:mt-1 flex-shrink-0 text-sm sm:text-base" />
              <span className="font-medium text-white">When you order, you don agree to these terms already</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notice;