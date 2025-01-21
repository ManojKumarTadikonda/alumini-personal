import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import UpcomingEventscard from "./UpcomingEventsCard";

export default function UpcomingEventsCarousel() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    const eventData = [
      {
        image: "./src/assets/images.jpeg",
        title: "Event 1",
        description:
          "Carousel uses region role and since any attribute is passed to the main container element, attributes such as aria-label and aria-roledescription can be used as well.",
        date: "January 15, 2025",
      },
      {
        image: "./src/assets/2.jpeg",
        title: "Event 2",
        description:
          "The slides container has aria-live attribute set if the carousel is not in autoplay mode, making it accessible.",
        date: "January 20, 2025",
      },
      {
        image: "./src/assets/3.jpeg",
        title: "Event 3",
        description:
          "PrimeReact's Carousel component is flexible and supports both horizontal and vertical orientations.",
        date: "February 10, 2025",
      },
    ];

    setEvents(eventData);
  }, []);

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const eventTemplate = (event) => {
    return (
      <UpcomingEventscard
        key={event.title}
        image={event.image}
        title={event.title}
        description={event.description}
        date={event.date}
      />
    );
  };

  return (
    <div className="px-4 py-8">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800 dark:text-gray-50">
        Upcoming Events
      </h2>
      <div className="card">
        <Carousel
          value={events}
          numVisible={2}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          itemTemplate={eventTemplate}
          orientation="horizontal"
          circular
          autoplayInterval={3000}
        />
      </div>
    </div>
  );
}
