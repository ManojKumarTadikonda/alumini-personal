"use client";

import { useState } from "react";

export function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide

  const images = [
    {
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Jan 15, 2025",
      text: "Concert Event",
    },
    {
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Feb 20, 2025",
      text: "Conference",
    },
    {
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Mar 5, 2025",
      text: "Networking Event",
    },
    {
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "Apr 10, 2025",
      text: "Tech Meetup",
    },
    {
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      date: "May 25, 2025",
      text: "Outdoor Festival",
    },
  ];

  // Go to the previous image
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Go to a specific image based on index
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative mx-auto max-w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
      {/* Carousel Section */}
      <div className="relative h-56 sm:h-64 lg:h-80 xl:h-[30rem] 2xl:h-[36rem] rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        {/* Hoverable Image */}
        <div className="relative group h-full w-full">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
            className="object-cover h-full w-full"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center text-white">
            <p className="text-sm sm:text-lg font-medium mb-2">{images[currentIndex].date}</p>
            <h3 className="text-lg sm:text-2xl font-bold mb-4">{images[currentIndex].text}</h3>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-400"
        >
          &lt;
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full shadow-lg bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-400"
        >
          &gt;
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3.5 h-3.5 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            } transition-colors duration-300 ease-in-out`}
          ></button>
        ))}
      </div>
    </div>
  );
}
