'use client'

import React, { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Truck, Shield, RotateCcw, Phone } from 'lucide-react';

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
          <Truck className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <p>
            We deliver within <span className="font-semibold">24–48 hours</span> 
            in major states across Nigeria. Order today, get it at your doorstep in no time!
          </p>
        </div>
      )
    },
    {
      question: "What if it stops working after I buy?",
      answer: (
        <div className="flex items-start gap-2">
          <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <p>
            Your earpiece comes with a <span className="font-semibold">6-month warranty</span>. 
            If it has any fault, we’ll replace it immediately — no long repair stories. <br />
            <a href="https://wa.me/2348051230133" target="_blank" rel="noopener noreferrer" className="text-green-600 font-medium underline">
              Chat with us on WhatsApp
            </a>
          </p>
        </div>
      )
    },
    {
      question: "Can I return it if I don’t like it?",
      answer: (
        <div className="flex items-start gap-2">
          <RotateCcw className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
          <p>
            Yes! We give you a <span className="font-semibold">30-day return guarantee</span>. 
            If you’re not happy, return it for a refund or exchange. <br />
            <span className="text-sm text-gray-500">
              (Note: If you return without buying something else, delivery fees will be deducted from your refund.)
            </span>
          </p>
        </div>
      )
    }
  ];

  return (
    <section id="faq" className="relative w-full py-16 bg-white">
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4 bg-green-50">
            <MessageCircle className="w-4 h-4" />
            Nigerian Buyers Ask...
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to know before ordering
          </h2>
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src="/assets/rev-6.jpg" 
              alt="FAQ Illustration" 
              className="w-full rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* FAQ Items */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4 mb-8">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="border-b border-gray-200 pb-4"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full text-left font-medium text-gray-900 py-3"
                  >
                    <span>{item.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openIndex === index && (
                    <div className="mt-1 text-gray-600 pb-2">
                      {item.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Support CTA */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a 
                  href="https://wa.me/2348051230133" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <button className="border border-gray-300 text-gray-700 font-medium py-2 px-6 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +234 805 123 0133
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
