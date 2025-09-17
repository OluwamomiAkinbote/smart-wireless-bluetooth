'use client'

import React, { useState } from "react";
import Image from "next/image";
import { 
  CheckCircle, Battery, Ear, Smartphone, Wifi, Zap, Clock, 
  Shield, Star, Droplets, MicOff, ChevronLeft, ChevronRight, Mic
} from 'lucide-react';

const PainSolution = () => {
  const [activeIndices, setActiveIndices] = useState({});
  
  const solutions = [
    {
      icon: <Wifi className="w-8 h-8 text-white" />,
      images: ["/assets/bluetooth-001.jpg", "/assets/image-6.png", "/assets/image-9.png" ],
      pain: "Calls dey always cut when I dey road or traffic.",
      solution:
        "With Bluetooth 5.3, enjoy clear calls wey no go break — even for crowded places.",
      highlights: [
        "No more dropped calls",
        "Strong connection up to 10 meters",
        "Quick pairing with your phone"
      ]
    },
    {
      icon: <Battery className="w-8 h-8 text-white" />,
      images: ["/assets/180-hrs.jpg", "/assets/BT-006.jpg", "/assets/BT-OO5.jpg"],
      pain: "Old earpiece battery dey die before afternoon.",
      solution:
        "100H Standby + LED Display — check battery level anytime. Enjoy 10–12 hours nonstop listening.",
      highlights: [
        "8 hours nonstop with one charge",
        "Case fit recharge am 6 times",
        "10 minutes charge = 2 hours music"
      ]
    },
    {
      icon: <Ear className="w-8 h-8 text-white" />,
      images: ["/assets/comfortable-fit.jpg", "/assets/BT-003.jpg", "/assets/BT-010.jpg", "/assets/image-10.jpg"],
      pain: "Other earbuds dey pain ear after long use.",
      solution:
        "Soft lightweight design with ear hook — comfortable from morning till night.",
      highlights: [
        "3 ear tip sizes included",
        "Each earbud weigh only 4g",
        "No pain even after many hours"
      ]
    },
    {
      icon: <Droplets className="w-8 h-8 text-white" />,
      images: ["/assets/rev-5.jpg"],
      pain: "Rain or sweat don spoil many earpiece during exercise.",
      solution:
        "Sweatproof + Waterproof — enjoy music no matter rain, gym or outdoor activity.",
      highlights: [
        "Perfect for jogging or gym",
        "No fear rain or sweat",
        "Strong outdoor durability"
      ]
    },
    {
      icon: <MicOff className="w-8 h-8 text-white" />,
      images: ["/assets/BT-004.jpg"],
      pain: "No quick way to mute mic during calls.",
      solution:
        "One-Tap Mute Button with instant voice alert — easy control anywhere.",
      highlights: [
        "Mute/unmute in one tap",
        "Good for office & driving",
        "Reliable for serious calls"
      ]
    },
    {
      icon: <Mic className="w-8 h-8 text-white" />,
      images: ["/assets/BT-009.jpg", "/assets/BT-001.jpg"],
      pain: "Always need to touch phone while driving.",
      solution:
        "Voice Control — talk to Siri or Google without touching your phone. Drive safer, multitask smarter.",
      highlights: [
        "Activate Siri/Google hands-free",
        "No need to press phone",
        "Safe for driving or busy work"
      ]
    }
  ];

  const handleScroll = () => {
    const section = document.getElementById("packages");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const nextImage = (index) => {
    setActiveIndices(prev => ({
      ...prev,
      [index]: ((prev[index] || 0) + 1) % solutions[index].images.length
    }));
  };

  const prevImage = (index) => {
    setActiveIndices(prev => ({
      ...prev,
      [index]: ((prev[index] || 0) - 1 + solutions[index].images.length) % solutions[index].images.length
    }));
  };

  return (
    <section id="pain-solution" className="relative w-full py-14 bg-gradient-to-br from-blue-50 to-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Section Header - Refined for Marketing */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 text-lg font-extrabold mb-6 shadow-lg rounded-full transform hover:scale-105 transition-all duration-300">
            <Zap className="w-5 h-5" />
            TODAY ONLY – MASSIVE DISCOUNT!
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
            End Call Problems, Enjoy Clear Conversations
          </h2>
          <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto font-semibold">
            Say goodbye to call interruptions, weak battery life, and painful earbuds. This Bluetooth headset is built for Nigerians who drive, work, and hustle daily — giving you comfort, durability, and crystal-clear calls.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden transform hover:-translate-y-1"
            >
              <div className="w-full relative">
                <Image 
                  src={solution.images[activeIndices[index] || 0]} 
                  alt={solution.pain} 
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto"
                  quality={100}
                />
                
                {solution.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(index);
                      }}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(index);
                      }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}
                
                <div className="absolute top-4 left-4 bg-blue-600 p-3 shadow-lg rounded-lg">
                  {solution.icon}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-gray-900 mb-3 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                  {solution.pain}
                </h3>
                <p className="text-blue-700 text-lg font-bold mb-4 bg-yellow-50 p-3 rounded-lg">
                  {solution.solution}
                </p>
                
                <h4 className="text-xl font-black text-gray-900 mb-3 text-center bg-gradient-to-r from-green-500 to-green-600 text-white p-2 rounded-md">
                  Key Benefits You’ll Enjoy
                </h4>
                <ul className="space-y-3">
                  {solution.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-900 text-lg font-medium">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Why Nigerians Trust Us
          </h3>
        </div>
        
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { text: "FREE DELIVERY", subtext: "Fast delivery anywhere in Nigeria", icon: <Zap className="w-6 h-6" />, color: "bg-gradient-to-br from-blue-600 to-blue-800" },
            { text: "6-MONTH WARRANTY", subtext: "Buy with full confidence", icon: <Shield className="w-6 h-6" />, color: "bg-gradient-to-br from-green-600 to-green-800" },
            { text: "30-DAY RETURN", subtext: "Easy refund if you’re not satisfied", icon: <Clock className="w-6 h-6" />, color: "bg-gradient-to-br from-red-600 to-red-800" },
            { text: "500+ HAPPY CUSTOMERS", subtext: "Nigerians already enjoying it", icon: <Star className="w-6 h-6" />, color: "bg-gradient-to-br from-purple-600 to-purple-800" }
          ].map((item, i) => (
            <div key={i} className={`${item.color} text-white p-5 text-center shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center`}>
              <div className="mb-3 bg-white/20 p-2 rounded-full">{item.icon}</div>
              <p className="font-extrabold text-lg mb-1">{item.text}</p>
              <p className="text-white/90 text-sm font-medium">{item.subtext}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <button 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-black py-4 px-10 text-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto rounded-xl"
            onClick={handleScroll}
          >
            <Zap className="w-6 h-6 mr-3" />
            Order Now – 50% Off Today
          </button>
          <p className="text-lg text-gray-700 font-semibold mt-4">
            Hurry — this special offer fit end anytime!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;
