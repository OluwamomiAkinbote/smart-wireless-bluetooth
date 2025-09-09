'use client'

import { useState, useRef } from 'react'

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const handleScrollToPackages = () => {
    const section = document.getElementById("packages")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full -translate-y-1/3 translate-x-1/3 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full translate-y-1/3 -translate-x-1/3 opacity-30"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Your Product, Your Advantage
          </h2>
          <p className="text-lg md:text-xl text-blue-800 max-w-3xl mx-auto leading-relaxed">
            Watch the demo and see how this product makes life easier, smarter, and better for you.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative bg-white rounded-2xl overflow-hidden border border-blue-200 shadow-xl">
          <div className="aspect-video relative">
            <video
              ref={videoRef}
              src="/assets/video 3.mp4"
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="/assets/BT-0011.jpg"
            />
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-blue-900 bg-opacity-40 cursor-pointer transition-opacity duration-300 hover:bg-opacity-30"
                onClick={handlePlayVideo}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-95 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                  <svg 
                    className="w-10 h-10 md:w-12 md:h-12 text-blue-600 ml-1" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
            
            {/* Pause Button */}
            {isPlaying && (
              <button
                className="absolute top-4 right-4 bg-blue-900 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                onClick={handlePauseVideo}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Trust & Urgency Banner with CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl p-6 md:p-8 shadow-xl border border-indigo-600 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-white opacity-10"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-400 rounded-full opacity-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            {/* Trust indicators on left */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6 md:mb-0 md:gap-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-300 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-100 text-sm font-medium">30-Day Guarantee</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-300 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-blue-100 text-sm font-medium">Secure Payment</span>
              </div>
            </div>
            
            {/* Center CTA Button */}
            <button
              onClick={handleScrollToPackages}
              className="bg-white text-blue-800 hover:bg-blue-50 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center group"
            >
              <span>Order Now - Limited Time Offer</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            {/* Urgency indicator on right */}
            <div className="hidden lg:flex items-center mt-6 md:mt-0">
              <div className="bg-red-500 rounded-lg py-2 px-3 flex items-center">
                <svg className="w-4 h-4 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white text-sm font-bold">Sale Ends Soon</span>
              </div>
            </div>
          </div>
          
          {/* Mobile urgency indicator */}
          <div className="lg:hidden flex justify-center mt-4">
            <div className="bg-red-500 rounded-lg py-2 px-3 flex items-center">
              <svg className="w-4 h-4 text-white mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-white text-sm font-bold">Sale Ends Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoShowcase