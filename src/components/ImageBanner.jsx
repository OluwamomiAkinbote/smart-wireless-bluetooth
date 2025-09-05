'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

const ImageBanner = () => {
  const images = [
    "/assets/amazon-2.jpg",
    "/assets/amazon-3.jpg",
    "/assets/amazon-4.jpg",
    "/assets/amazon-5.jpg",
    "/assets/amazon-6.jpg",
    "/assets/amazon-1.jpg",
    "/assets/amazon-d.jpg",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  const nextBanner = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevBanner = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Swipe handling
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      // Swiped left → next
      nextBanner();
    } else if (diff < -50) {
      // Swiped right → prev
      prevBanner();
    }
  };

  return (
    <div className="relative w-full bg-white">
      <div
        className="relative w-full aspect-[1464/600] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          key={currentIndex}
          src={images[currentIndex]}
          alt={`banner-${currentIndex}`}
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />
      </div>
    </div>
  );
};

export default ImageBanner;