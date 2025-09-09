'use client'

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Truck, Shield, RotateCcw, Phone, Bluetooth, Wifi, Zap } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How fast is delivery in Nigeria?",
      answer: (
        <div className="flex items-start gap-2">
          <Truck className="w-5 h-5 text-blue-300 flex-shrink-0 mt-1" />
          <p className="text-gray-200">
            We deliver within <span className="font-semibold text-white">24–48 hours</span> 
            in major states across Nigeria. Order today, get it at your doorstep in no time!
          </p>
        </div>
      )
    },
    {
      question: "How can I connect to another device?",
      answer: (
        <div className="flex items-start gap-2">
          <Bluetooth className="w-5 h-5 text-purple-300 flex-shrink-0 mt-1" />
          <div>
            <ol className="list-decimal pl-5 space-y-2 text-gray-200">
              <li>After pairing with the first device, turn off Bluetooth on the first device. The headset will enter pairing mode again.</li>
              <li>Turn on Bluetooth on the second device, then connect it with the single ear Bluetooth headset.</li>
              <li>Turn on Bluetooth on the first device.</li>
              <li>Turn off the Bluetooth earpiece and turn it back on - it will automatically connect with both devices.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      question: "What if it stops working after I buy?",
      answer: (
        <div className="flex items-start gap-2">
          <Shield className="w-5 h-5 text-green-300 flex-shrink-0 mt-1" />
          <p className="text-gray-200">
            Your earpiece comes with a <span className="font-semibold text-white">6-month warranty</span>. 
            If it has any fault, we'll replace it immediately — no long repair stories. <br />
            <a href="https://wa.me/2348051230133" target="_blank" rel="noopener noreferrer" className="text-blue-300 font-medium underline hover:text-blue-200">
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      )
    },
    {
      question: "Can I return it if I don't like it?",
      answer: (
        <div className="flex items-start gap-2">
          <RotateCcw className="w-5 h-5 text-orange-300 flex-shrink-0 mt-1" />
          <p className="text-gray-200">
            Yes! We give you a <span className="font-semibold text-white">30-day return guarantee</span>. 
            If you're not happy, return it for a refund or exchange. <br />
            <span className="text-sm text-gray-400">
              (Note: If you return without buying something else, delivery fees will be deducted from your refund.)
            </span>
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="relative w-full py-16 overflow-hidden">
      {/* Dark Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-700 rounded-full -translate-y-1/2 translate-x-1/2 opacity-20 blur-xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-800 rounded-full translate-y-1/2 -translate-x-1/2 opacity-20 blur-xl"></div>
      
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-800/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-blue-700/50 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to know
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get answers to the most common questions about our products, delivery, and support.
          </p>
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Image */}
          <div className="w-full lg:w-2/5 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl rotate-2 opacity-30"></div>
            <img 
              src="/assets/rev-6.jpg" 
              alt="FAQ Illustration" 
              className="w-full rounded-2xl shadow-lg object-cover relative z-10 border border-blue-700/30"
            />
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-blue-800 p-3 rounded-full shadow-lg border border-blue-600/30">
              <Wifi className="w-6 h-6 text-blue-300" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-800 p-3 rounded-full shadow-lg border border-purple-600/30">
              <Zap className="w-6 h-6 text-purple-300" />
            </div>
          </div>

          {/* FAQ Items */}
          <div className="w-full lg:w-3/5">
            <div className="space-y-4 mb-8">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-blue-900/30 rounded-xl border border-blue-800/50 overflow-hidden transition-all duration-300 hover:bg-blue-900/40 backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full text-left font-semibold text-white p-5 hover:bg-blue-800/20 transition-colors"
                  >
                    <span className="text-lg">{item.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-300 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-5 pb-5 text-gray-200 animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Support CTA */}
            <div className="text-center lg:text-left bg-gradient-to-r from-blue-700 to-purple-800 p-6 rounded-2xl text-white border border-blue-600/30">
              <p className="text-lg font-medium mb-4">Still have questions?</p>
              <p className="mb-4 text-blue-100">Our support team is here to help you get the most out of your device.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/2348051230133" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <button className="bg-transparent border border-white/30 text-white font-medium py-3 px-6 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  +234 805 123 0133
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FAQ;