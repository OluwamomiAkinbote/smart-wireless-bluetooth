'use client'

import React, { useState } from 'react';
import { X, MessageCircle, Headphones, ShoppingCart, Info, DollarSign } from 'lucide-react';

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleWidget = () => setIsOpen(!isOpen);
  const closeWidget = () => setIsOpen(false);
  const hideWidget = () => setIsVisible(false);

  const whatsappNumber = '2348051230133';

  const inquiries = [
    {
      title: 'Price & Availability',
      icon: <DollarSign className="w-4 h-4" />,
      message: 'Hello! I\'m interested in the Smart Wireless-Bluetooth earbuds. What\'s the current price and availability?',
      description: 'Get pricing information',
      color: 'bg-green-100 text-green-700'
    },
    {
      title: 'Specifications',
      icon: <Info className="w-4 h-4" />,
      message: 'Hi! Can you tell me more about the Smart Wireless-Bluetooth features? Battery life, sound quality, etc.',
      description: 'Learn about features',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      title: 'Place Order',
      icon: <ShoppingCart className="w-4 h-4" />,
      message: 'Hello! I want to purchase the Smart Wireless-Bluetooth earbuds. How can I place an order?',
      description: 'Ready to buy now',
      color: 'bg-orange-100 text-orange-700'
    },
    {
      title: 'Ask Question',
      icon: <MessageCircle className="w-4 h-4" />,
      message: 'Hi! I have some questions about the Smart Wireless-Bluetooth earbuds. Can you help me?',
      description: 'Custom inquiry',
      color: 'bg-purple-100 text-purple-700'
    }
  ];

  const sendWhatsAppMessage = (message) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    closeWidget();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded WhatsApp Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Headphones className="w-5 h-5" />
                <h3 className="font-semibold">Smart Wireless-Bluetooth</h3>
              </div>
              <button
                onClick={closeWidget}
                className="w-6 h-6 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Inquiry Options */}
          <div className="p-4 space-y-2">
            <p className="text-sm text-gray-600 mb-3">How can we help you?</p>
            
            {inquiries.map((inquiry, index) => (
              <button
                key={index}
                onClick={() => sendWhatsAppMessage(inquiry.message)}
                className="w-full flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-colors text-left"
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${inquiry.color}`}>
                  {inquiry.icon}
                </div>
                <div className="flex-grow">
                  <div className="font-medium text-gray-900 text-sm">{inquiry.title}</div>
                  <div className="text-xs text-gray-500">{inquiry.description}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 p-3 bg-gray-50">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span className="flex items-center space-x-1">
                <MessageCircle className="w-3 h-3 text-green-600" />
                <span>WhatsApp Support</span>
              </span>
              <span className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Online</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={toggleWidget}
        className="relative w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md transition-colors flex items-center justify-center"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}

        {/* Online indicator */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
      </button>
    </div>
  );
};

export default FloatingContactWidget;