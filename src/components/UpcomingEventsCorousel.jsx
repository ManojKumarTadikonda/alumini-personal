import React, { useState, useEffect } from "react";
import UpcomingEventscard from "./UpcomingEventsCard";
import { FaGlobe, FaLaptop, FaUsers, FaMapMarkerAlt } from "react-icons/fa"; // Icons from React Icons

export default function UpcomingEventsCarousel() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    // Simulated event data
    const eventData = [
      {
        image: "./src/assets/images.jpeg",
        title: "Homecoming",
        description:
          "Join us for our annual Homecoming event, featuring the football game, the 5K run, and more!",
        date: "Oct 15",
        type: "In-person",
      },
      {
        image: "./src/assets/2.jpeg",
        title: "Hello Nuzvid",
        description:
          "Join us for our annual Homecoming event, featuring the football game, the 5K run, and more!",
        date: "Jan 10",
        type: "Webinar",
      },
      {
        image: "./src/assets/3.jpeg",
        title: "Alumni Meetup",
        description:
          "Catch up with old friends and meet new alumni at our networking event!",
        date: "Feb 5",
        type: "Virtual",
      },
    ];

    setEvents(eventData);
    setFilteredEvents(eventData.slice(0, 2)); // Default to showing the first two events
  }, []);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredEvents(events.slice(0, 2));
    } else {
      const filtered = events.filter((event) => event.type === filter).slice(0, 2);
      setFilteredEvents(filtered);
    }
  };

  const filters = [
    { label: "All", icon: <FaGlobe />, type: "All" },
    { label: "Webinars", icon: <FaLaptop />, type: "Webinar" },
    { label: "In-person", icon: <FaUsers />, type: "In-person" },
    { label: "Virtual", icon: <FaMapMarkerAlt />, type: "Virtual" },
  ];

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-50">
        Upcoming events
      </h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        RGUKT alumni events are a great way to stay connected to the University
        and your fellow graduates. Find an event near you or one that matches
        your interests.
      </p>
      {/* Filter Buttons with Icons */}
      <div className="flex gap-4 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.type}
            className={`flex items-center gap-2 py-2 px-4 rounded-full text-sm font-semibold ${
              activeFilter === filter.type
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-700 hover:text-white transition-all`}
            onClick={() => handleFilter(filter.type)}
          >
            {filter.icon}
            {filter.label}
          </button>
        ))}
      </div>
      {/* Events Display */}
      <div className="flex flex-col gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <UpcomingEventscard
              key={event.title}
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
            />
          ))
        ) : (
          <p className="text-gray-500">No events found for this category.</p>
        )}
      </div>
    </div>
  );
}
