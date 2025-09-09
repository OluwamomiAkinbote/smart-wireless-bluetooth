'use client'

import React, { useState, useEffect } from "react";
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
      pain: "My calls always cut when I'm on the road or in traffic.",
      solution:
        "This new Bluetooth 5.3 gives you clear calls that no go cut — even when you dey for crowded place.",
      highlights: [
        "Your audio no go cut again during calls",
        "Connects well up to 10 meters away",
        "Connects to your phone quick quick"
      ]
    },
    {
      icon: <Battery className="w-8 h-8 text-white" />,
      images: ["/assets/180-hrs.jpg", "/assets/BT-006.jpg", "/assets/BT-OO5.jpg"],
      pain: "My old earpiece battery always die for middle of the day.",
      solution:
        "100H Long Standby with LED Display — you fit check your battery and use am for 10–12 hours straight + 100 hours standby.",
      highlights: [
        "8 hours straight with one charge",
        "Case fit charge am 6 times",
        "10 minutes charge = 2 hours music"
      ]
    },
    {
      icon: <Ear className="w-8 h-8 text-white" />,
      images: ["/assets/comfortable-fit.jpg", "/assets/BT-003.jpg", "/assets/BT-010.jpg", "/assets/image-10.jpg"],
      pain: "Other earbuds dey pain my ear after I use am for long.",
      solution:
        "Soft design with adjustable hook — e dey comfortable for your ear all day, no pain.",
      highlights: [
        "Come with 3 different ear tip sizes",
        "Light like feather (only 4g each)",
        "Your ear no go pain even after many hours"
      ]
    },
    {
      icon: <Droplets className="w-8 h-8 text-white" />,
      images: ["/assets/rev-5.jpg"],
      pain: "Rain or sweat don spoil many earpieces when I dey exercise.",
      solution:
        "Waterproof and Sweatproof — your music no go stop whether rain fall or you sweat for gym.",
      highlights: [
        "Good for outdoor exercise",
        "No fear rain or sweat",
        "Use am anywhere without worry"
      ]
    },
    {
      icon: <MicOff className="w-8 h-8 text-white" />,
      images: ["/assets/BT-004.jpg"],
      pain: "I no fit quickly mute my mic when I dey on call.",
      solution:
        "One-Tap Mute Button — you go hear 'Mute On/Off' immediately so you fit control your call any where you dey.",
      highlights: [
        "Mute and unmute quick quick",
        "Dey work well for office or when you dey drive",
        "Dependable for important calls"
      ]
    },
    {
      icon: <Mic className="w-8 h-8 text-white" />,
      images: ["/assets/BT-009.jpg", "/assets/BT-001.jpg"],
      pain: "I need to use my hands to control phone when I dey drive.",
      solution:
        "Intelligent Voice Control — you fit talk to your voice assistant without touching your phone, especially when you dey drive.",
      highlights: [
        "Just talk to activate Siri or Google",
        "No need to touch your phone",
        "Safe for driving and multitasking"
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
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 text-sm font-bold mb-6 shadow-md rounded-full">
            <Zap className="w-4 h-4" />
            SPECIAL OFFER – TODAY ONLY
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Forget Stressful Calls, <span className="text-blue-600">Enjoy Clear Conversations</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            No more calls wey go cut, battery wey go die, or earpiece wey go pain your ear. This Bluetooth headset go make your life better — whether you dey drive, dey work, or dey move about.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 rounded-lg overflow-hidden"
            >
              <div className="w-full relative">
                {/* Image container with full display */}
                <div className="w-full relative">
                  <Image 
                    src={solution.images[activeIndices[index] || 0]} 
                    alt={solution.pain} 
                    width={800}
                    height={600}
                    className="object-cover w-full h-auto"
                    quality={100}
                  />
                  
                  {/* Navigation arrows for multiple images */}
                  {solution.images.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage(index);
                        }}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition-all"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage(index);
                        }}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition-all"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  
                  <div className="absolute top-4 left-4 bg-blue-600 p-2 shadow-md rounded-md">
                    {solution.icon}
                  </div>
                </div>
                
                {/* Image indicators for multiple images */}
                {solution.images.length > 1 && (
                  <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                    {solution.images.map((_, i) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 rounded-full ${i === (activeIndices[index] || 0) ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-base font-bold text-gray-900 mb-2">{solution.pain}</h3>
                <p className="text-blue-600 text-sm font-semibold mb-3">{solution.solution}</p>
                
                <ul className="space-y-2">
                  {solution.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { text: "Free Delivery", subtext: "We deliver everywhere for Nigeria", icon: <Zap className="w-5 h-5" />, color: "bg-blue-600" },
            { text: "6-Month Warranty", subtext: "No long story", icon: <Shield className="w-5 h-5" />, color: "bg-green-600" },
            { text: "30-Day Returns", subtext: "We go return your money", icon: <Clock className="w-5 h-5" />, color: "bg-red-600" },
            { text: "500+ Reviews", subtext: "Our customers dey happy", icon: <Star className="w-5 h-5" />, color: "bg-purple-600" }
          ].map((item, i) => (
            <div key={i} className={`${item.color} text-white p-4 text-center shadow-sm flex flex-col items-center rounded-md`}>
              <div className="mb-2">{item.icon}</div>
              <p className="font-bold text-sm">{item.text}</p>
              <p className="text-white/90 text-xs">{item.subtext}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 text-base shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto rounded-lg"
            onClick={handleScroll}
          >
            <Zap className="w-5 h-5 mr-2" />
            BUY NOW – 50% OFF TODAY ONLY
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;