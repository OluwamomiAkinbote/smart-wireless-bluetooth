'use client'

import React from "react";
import Image from "next/image";
import { CheckCircle, Battery, Ear, Smartphone, Wifi, Zap, Clock, Shield, Star } from 'lucide-react';

const PainSolution = () => {
  const solutions = [
    {
      icon: <Wifi className="w-8 h-8 text-white" />,
      img: "/assets/bluetooth-001.jpg",
      pain: "Calls keep breaking or cutting when I'm on the road.",
      solution:
        "Revolutionary Bluetooth 5.3 gives clear, stable calls with no dropouts — even in crowded places.",
      highlights: [
        "No more audio cuts during calls",
        "10m stable connection range",
        "Pairs instantly to any device"
      ]
    },
    {
      icon: <Battery className="w-8 h-8 text-white" />,
      img: "/assets/180-hrs.jpg",
      pain: "My old earpiece battery dies in the middle of the day.",
      solution:
        "100H Long Standby with LED Display — track your battery and enjoy 10–12 hours nonstop use + 100 hours standby.",
      highlights: [
        "8hrs non-stop on single charge",
        "6 full recharges from case",
        "10min charge = 2hrs playback"
      ]
    },
    {
      icon: <Ear className="w-8 h-8 text-white" />,
      img: "/assets/comfortable-fit.jpg",
      pain: "Most earbuds hurt my ear after long use.",
      solution:
        "Ergonomic 12g Design with adjustable hook — soft, secure, and comfortable for all-day wear without pain.",
      highlights: [
        "3 ear tip sizes included",
        "Light as a feather (4g each)",
        "No ear fatigue after hours"
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-white" />,
      img: "/assets/dual-connection.jpg",
      pain: "Switching between phone and laptop is stressful.",
      solution:
        "Dual Device Connection + One-Button Control — switch instantly, no stress, no missed calls.",
      highlights: [
        "Connect to two devices at once",
        "Seamless switching between calls",
        "Easy controls for music and calls"
      ]
    },
  ];

  const handleScroll = () => {
    const section = document.getElementById("packages");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pain-solution" className="relative w-full py-12 bg-gradient-to-br from-blue-50 to-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 text-sm font-bold mb-6 shadow-md">
            <Zap className="w-4 h-4" />
            PROBLEM SOLVED - LIMITED TIME OFFER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Daily Problems — <span className="text-blue-600">Solved Instantly</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Stop struggling with inferior earbuds. Here's how we solve your everyday frustrations:
          </p>
        </div>

        {/* Solutions Grid 3x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:grid-rows-2">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-full relative">
                <Image 
                  src={solution.img} 
                  alt={solution.pain} 
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                  quality={100}
                />
                <div className="absolute top-4 left-4 bg-blue-600 p-2 shadow-md">
                  {solution.icon}
                </div>
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
            { text: "Free Delivery", subtext: "Nationwide coverage", icon: <Zap className="w-5 h-5" />, color: "bg-blue-600" },
            { text: "6-Month Warranty", subtext: "No questions asked", icon: <Shield className="w-5 h-5" />, color: "bg-green-600" },
            { text: "30-Day Returns", subtext: "Money-back guarantee", icon: <Clock className="w-5 h-5" />, color: "bg-red-600" },
            { text: "500+ Reviews", subtext: "Verified purchases", icon: <Star className="w-5 h-5" />, color: "bg-purple-600" }
          ].map((item, i) => (
            <div key={i} className={`${item.color} text-white p-4 text-center shadow-sm flex flex-col items-center`}>
              <div className="mb-2">{item.icon}</div>
              <p className="font-bold text-sm">{item.text}</p>
              <p className="text-white/90 text-xs">{item.subtext}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 text-base shadow-md transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
            onClick={handleScroll}>
            <Zap className="w-5 h-5 mr-2" />
            GET YOURS NOW - 50% OFF TODAY ONLY
          </button>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;
