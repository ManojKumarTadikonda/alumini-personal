import React from "react";

export default function UpcomingEventscard({ image, title, description, date }) {
  return (
    <div className="flex justify-between items-center w-full sm:w-4/5 md:w-3/5 lg:w-2/5 rounded-lg bg-white shadow-lg dark:bg-neutral-800 p-4">
      {/* Image Section */}
      <img
        className="w-32 h-32 rounded-lg object-cover"
        src={image}
        alt={title}
      />
      {/* Text Section */}
      <div className="flex flex-col justify-start flex-1 px-4">
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{date}</p>
        <h5 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-50">
          {title}
        </h5>
        <p className="text-sm text-gray-600 dark:text-gray-200 line-clamp-2">
          {description}
        </p>
      </div>
      {/* RSVP Button */}
      <button
        className="bg-blue-900 text-white py-2 px-4 rounded-full text-sm shadow-md hover:bg-blue-700 transition-all"
      >
        RSVP
      </button>
    </div>
  );
}
