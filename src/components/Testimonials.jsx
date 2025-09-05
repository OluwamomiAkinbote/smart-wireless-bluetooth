'use client'

import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Oghenetetega O.",
    role: "Frequent Traveler",
    state: "Delta State",
    rating: 5,
    image: "/assets/rev-5.jpg",
    content: "Works perfectly with two phones simultaneously. Crystal clear calls, all-day comfort, and exceptional battery life - my go-to headset for business trips!",
    highlight: "All-day comfort"
  },
  {
    name: "Oritsejolomi",
    role: "Customer Support Agent",
    state: "Delta State",
    rating: 4,
    image: "/assets/rev-3.jpg",
    content: "As someone who spends 8+ hours daily on calls, these have been a game-changer. The sound quality rivals headsets twice the price!",
    highlight: "8+ hour battery"
  },
  {
    name: "Yusuf Kolade",
    role: "Tech Enthusiast",
    state: "Ogun State",
    rating: 5,
    image: "/assets/rev-4.jpg",
    content: "After 6 months of daily use, they still perform like new. The auto-connect feature saves me minutes every day - brilliant engineering!",
    highlight: "6-month durability"
  }
];

const TestimonialCard = ({ name, role, state, rating, content, image, highlight }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
      
      {/* Native image size (no forced aspect ratio) */}
      <div className="relative w-full">
        <Image 
          src={image} 
          alt={name} 
          width={800} 
          height={600} 
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-white font-bold text-lg">{name}</h3>
              <p className="text-gray-200 text-sm">{role}, {state}</p>
            </div>
            <div className="flex items-center bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-bold">
              <Star size={14} fill="currentColor" className="mr-1" />
              {rating}.0
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 relative">
        <Quote className="absolute top-4 right-6 text-gray-200" size={24} />
        
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
            {highlight}
          </span>
          <p className="text-gray-700">"{content}"</p>
        </div>
        
        <div className="flex justify-between items-center text-sm">
          <div className="flex text-yellow-400">
            {Array.from({ length: rating }, (_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <span className="text-gray-500 text-xs">Verified Purchase</span>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium mb-4">
            TRUSTED BY THOUSANDS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Loved by <span className="text-blue-600">Professionals</span> Across Nigeria
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover why thousands of professionals choose our premium audio solutions
          </p>
        </div>
        
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

      </div>
    </section>
  );
};
