'use client'

import React from "react";
import Image from "next/image";
import { FaShippingFast, FaShieldAlt, FaCheckCircle, FaPercentage, FaClock, FaHeadphones, FaSyncAlt } from "react-icons/fa";

const Packages = () => {
  const packages = [
    {
      name: "Starter Pack",
      items: "Perfect for Individuals",
      price: "₦35,000",
      original: "₦40,000",
      savings: "12% OFF",
      image: "/assets/image-4.png",
      popular: false,
      features: [
        { icon: <FaShippingFast />, text: "FREE 24-Hour Delivery in Lagos" },
        { icon: <FaClock />, text: "Priority Customer Support" },
        { icon: <FaShieldAlt />, text: "6-Month Warranty" },
        { text: "Perfect for personal use" },
        { text: "Pay on delivery available" },
      ],
      cta: "GET STARTED NOW"
    },
    {
      name: "Duo Pack",
      items: "Most Popular - Best Value",
      price: "₦68,000",
      original: "₦80,000",
      savings: "15% OFF",
      popular: true,
      image: "/assets/image-5.png",
      features: [
        { icon: <FaCheckCircle />, text: "Everything in Starter Pack" },
        { icon: <FaPercentage />, text: "Extra 5% Discount" },
        { icon: <FaHeadphones />, text: "Premium Sound Enhancement" },
        { text: "Perfect for couples" },
        { text: "Save ₦12,000 vs buying separately" },
        { text: "⭐ BEST VALUE DEAL" },
      ],
      cta: "GET BEST VALUE"
    },
    {
      name: "Family Pack",
      items: "Ultimate Savings Package",
      price: "₦98,500",
      original: "₦120,000",
      savings: "18% OFF",
      popular: false,
      image: "/assets/image-3.png",
      features: [
        { icon: <FaCheckCircle />, text: "Everything in Duo Pack" },
        { icon: <FaSyncAlt />, text: "Lifetime Software Updates" },
        { icon: <FaHeadphones />, text: "Advanced Noise Cancellation" },
        { text: "Perfect for families & friends" },
        { text: "Save ₦21,500 vs buying separately" },
        { text: "Exclusive access to new features" },
      ],
      cta: "GET MAX SAVINGS"
    },
  ];
  
  const handleScroll = () => {
    const section = document.getElementById("contact-us");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white" id="packages">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
            🔥 LIMITED TIME OFFER - PRICES INCREASING SOON
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Buy More, Save More</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Exclusive bundle discounts - the perfect solution for everyone. Prices increasing next week!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 
              ${pkg.popular ? "border-4 border-orange-500 transform hover:scale-105 shadow-lg" : "border border-blue-200 bg-white shadow-md"}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white px-3 py-2 text-sm font-bold text-center">
                  ⭐ MOST POPULAR - BEST VALUE
                </div>
              )}

              <div className="p-6 h-full flex flex-col">
                <div className="text-center mb-4">
                  <h3 className={`text-2xl font-bold mb-1 ${pkg.popular ? "text-orange-600" : "text-gray-900"}`}>
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600">{pkg.items}</p>
                </div>

                <div className="w-full h-40 relative mb-6 flex items-center justify-center">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-gray-500 line-through">{pkg.original}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                      Save {pkg.savings}
                    </span>
                  </div>
                  <p className="text-orange-600 text-sm font-medium mt-2">Only {Math.floor(parseInt(pkg.price.replace(/\D/g,''))/1000)}k per earbud!</p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      {feature.icon && <span className="text-blue-600 mt-0.5">{feature.icon}</span>}
                      <span className={feature.text.includes("⭐") ? "font-bold text-orange-600" : ""}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-lg font-bold transition-colors
                  ${pkg.popular 
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md" 
                    : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                  onClick={handleScroll}
                >
                  {pkg.cta} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Section */}
        <div className="mt-10 bg-orange-50 border border-orange-200 rounded-xl p-6 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-orange-800 mb-2">🚨 Prices Increasing Soon!</h3>
          <p className="text-orange-700 mb-3">
            Due to high demand and rising costs, prices will increase by 15% next week. 
            Order now to lock in current rates!
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg" onClick={handleScroll}>
            SECURE YOUR PRICE NOW →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;