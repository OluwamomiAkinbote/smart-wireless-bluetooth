'use client'

import React, { useEffect, useState } from "react";
import { Users, Shield, Truck, ShoppingCart, PlayCircle, CreditCard, Timer } from "lucide-react";

const SalesHeader = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleScroll = () => {
    const section = document.getElementById("packages");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full">
      {/* Urgency + Trust Banner */}
      <div className="w-full bg-gradient-to-r from-orange-600 to-red-500 text-white py-3 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm font-medium shadow-md">
        <div className="flex items-center gap-2 font-semibold">
          <Timer size={16} className="text-white" />
          <span>Hurry! Offer ends in {formatTime(timeLeft)}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Truck size={16} className="text-white" />
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center gap-1">
            <CreditCard size={16} className="text-white" />
            <span>Pay on Delivery</span>
          </div>
        </div>
      </div>

      {/* Sales Header Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-10 md:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Say Goodbye to Background Noise.
            <span className="block text-blue-600 mt-3">
              Connects to your phone and laptop at the same time.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Talk without shouting, even in noisy places.  
            Move easily between your phone and laptop.  
            Control calls, music, and volume with just one button.
          </p>

          {/* Key Benefits Grid with Product Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            {/* Card 1 - Clear Sound */}
            <div className="bg-white overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl">
              <div className="w-full">
                <img 
                  src="/header/BT-008.jpg" 
                  alt="Noise cancellation technology" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 font-semibold mb-2 text-lg">Clear Sound</h3>
                <p className="text-gray-600">Noise cancellation makes your voice sharp and easy to hear, no matter where you are.</p>
              </div>
            </div>
            
            {/* Card 2 - Dual Connection */}
            <div className="bg-white overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl">
              <div className="w-full">
                <img 
                  src="/header/BT-007.jpg" 
                  alt="Dual device connection" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 font-semibold mb-2 text-lg">2 Devices at Once</h3>
                <p className="text-gray-600">Pick up a call on your phone, then jump back to your laptop — no need to disconnect.</p>
              </div>
            </div>
            
            {/* Card 3 - One-Touch Control */}
            <div className="bg-white overflow-hidden border border-gray-200 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl">
              <div className="w-full">
                <img 
                  src="/header/MFK.jpg" 
                  alt="Headphone with control button" 
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="p-5">
                <h3 className="text-gray-900 font-semibold mb-2 text-lg">One-Touch Control</h3>
                <p className="text-gray-600">Answer calls, change music, or adjust sound with one simple button.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <button
              onClick={handleScroll}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-orange-500/30 flex items-center justify-center"
            >
              <ShoppingCart className="mr-2" />
              ORDER NOW
            </button>
            <button
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-bold py-4 px-10 rounded-lg text-lg transition-all flex items-center justify-center"
            >
              <PlayCircle className="mr-2" />
              WATCH DEMO
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center">
              <Users className="text-blue-600 mr-2" />
              <span>Over 15,000 Happy Customers</span>
            </div>
            <div className="flex items-center">
              <Shield className="text-blue-600 mr-2" />
              <span>6-Month Warranty</span>
            </div>
            <div className="flex items-center">
              <Truck className="text-blue-600 mr-2" />
              <span>Free Nationwide Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesHeader;
