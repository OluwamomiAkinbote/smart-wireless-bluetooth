'use client'

import React from "react";
import Image from "next/image";
import { 
  FaShippingFast, FaShieldAlt, FaCheckCircle, FaPercentage, 
  FaClock, FaHeadphones, FaSyncAlt, FaWhatsapp, FaPhone,
  FaFire, FaStar, FaExclamationTriangle
} from "react-icons/fa";

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
        { icon: <FaShippingFast className="text-blue-500" />, text: "FREE 24-Hour Delivery in Lagos" },
        { icon: <FaClock className="text-blue-500" />, text: "Priority Customer Support" },
        { icon: <FaShieldAlt className="text-blue-500" />, text: "6-Month Warranty" },
        { text: "Perfect for personal use" },
        { text: "Pay on delivery available" },
      ],
      cta: "ORDER NOW"
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
        { icon: <FaCheckCircle className="text-blue-500" />, text: "Everything in Starter Pack" },
        { icon: <FaPercentage className="text-blue-500" />, text: "Extra 5% Discount" },
        { icon: <FaHeadphones className="text-blue-500" />, text: "Premium Sound Enhancement" },
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
        { icon: <FaCheckCircle className="text-blue-500" />, text: "Everything in Duo Pack" },
        { icon: <FaSyncAlt className="text-blue-500" />, text: "Lifetime Software Updates" },
        { icon: <FaHeadphones className="text-blue-500" />, text: "Advanced Noise Cancellation" },
        { text: "Perfect for families & friends" },
        { text: "Save ₦21,500 vs buying separately" },
        { text: "Exclusive access to new features" },
      ],
      cta: "GET MAX SAVINGS"
    },
  ];
  
  // Function to handle WhatsApp orders with package details
  const handleWhatsAppOrder = (packageName, price) => {
    const phoneNumber = "2348051230133";
    const message = `Hello! I would like to order the ${packageName} for ${price}. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Function to handle direct calls
  const handleCall = () => {
    window.location.href = "tel:+2348051230133";
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white border-t-4 border-orange-500" id="packages">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
            <FaFire className="text-white" />
            LIMITED TIME OFFER - PRICES INCREASING SOON
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Buy More, Save More</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Exclusive bundle discounts - the perfect solution for everyone. Prices increasing next week!
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 
              ${pkg.popular 
                ? "border-2 border-orange-500 transform hover:scale-105 shadow-xl bg-white" 
                : "border border-gray-200 bg-white shadow-lg"}`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-2 text-sm font-bold text-center flex items-center justify-center gap-2">
                  <FaStar className="text-white" />
                  MOST POPULAR - BEST VALUE
                </div>
              )}

              <div className="p-6 h-full flex flex-col">
                {/* Package Header */}
                <div className="text-center mb-4">
                  <h3 className={`text-2xl font-bold mb-1 ${pkg.popular ? "text-orange-600" : "text-gray-900"}`}>
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600">{pkg.items}</p>
                </div>

                {/* Product Image */}
                <div className="w-full h-40 relative mb-6 flex items-center justify-center">
                  <Image 
                    src={pkg.image} 
                    alt={pkg.name}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                  <div className="flex justify-center items-center gap-2">
                    <span className="text-gray-500 line-through">{pkg.original}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm font-medium">
                      Save {pkg.savings}
                    </span>
                  </div>
                  <p className="text-orange-600 text-sm font-medium mt-2">
                    Only {Math.floor(parseInt(pkg.price.replace(/\D/g,''))/1000)}k per earbud!
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700">
                      {feature.icon && <span className="mt-0.5">{feature.icon}</span>}
                      <span className={feature.text.includes("⭐") ? "font-bold text-orange-600" : ""}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Dual Buttons */}
                <div className="flex flex-col gap-3">
                  
                  {/* Regular CTA Button */}
                  <button
                    onClick={() => handleWhatsAppOrder(pkg.name, pkg.price)}
                    className={`w-full py-3 rounded-lg font-bold transition-colors border
                      ${pkg.popular 
                      ? "bg-orange-500 hover:bg-orange-600 text-white" 
                      : "bg-blue-600 hover:bg-blue-700 text-white"}`}
                  >
                    {pkg.cta}
                  </button>
                        {/* WhatsApp Button */}
                        <button
                          onClick={() => handleWhatsAppOrder(pkg.name, pkg.price)}
                          className={`w-full py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2
                          ${pkg.popular 
                            ? "bg-green-600 hover:bg-green-700 text-white shadow-md" 
                            : "bg-green-600 hover:bg-green-700 text-white"}`}
                        >
                          <FaWhatsapp className="text-lg" />
                          Order on WhatsApp
                        </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Section */}
        <div className="mt-10 bg-gradient-to-r from-red-50 to-orange-50 border border-orange-200 rounded-xl p-6 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FaExclamationTriangle className="text-red-500" />
            <h3 className="text-xl font-bold text-red-700">Prices Increasing Soon!</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Due to high demand and rising costs, prices will increase by 15% next week. 
            Order now to lock in current rates!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button 
              onClick={() => handleWhatsAppOrder("Any Package", "Current Price")}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
            >
              <FaWhatsapp /> ORDER ON WHATSAPP
            </button>
            <button 
              onClick={handleCall}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2"
            >
              <FaPhone /> CALL: +234 805 123 0133
            </button>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-8 text-center text-gray-600 text-sm bg-blue-50 p-4 rounded-lg">
          <p className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-6">
            <span className="flex items-center gap-1"><FaShippingFast className="text-blue-500" /> FREE Delivery in Lagos</span>
            <span className="flex items-center gap-1"><FaShieldAlt className="text-blue-500" /> 6-Month Warranty</span>
            <span className="flex items-center gap-1"><FaSyncAlt className="text-blue-500" /> 30-Day Return Policy</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;