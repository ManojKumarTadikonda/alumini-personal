import React from "react";

export default function UpcomingEventscard({ image, title, description, date }) {
  return (
    <div className="flex justify-center">
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 flex flex-row rounded-lg bg-white shadow-lg dark:bg-neutral-800">
        {/* Image Section */}
        <img
          className="w-1/3 h-48 rounded-l-lg object-cover"
          src={image}
          alt={title}
        />
        {/* Text Section */}
        <div className="flex flex-col justify-start p-4 w-2/3">
          <p className="text-xs text-gray-500 dark:text-gray-300">{date}</p>
          <h5 className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-50">
            {title}
          </h5>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-200 line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
