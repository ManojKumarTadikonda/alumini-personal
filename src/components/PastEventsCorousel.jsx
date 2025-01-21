import React from 'react';
import { Carousel } from 'primereact/carousel';
import PastEventsCard from './PastEventsCard'; // Import the PastEventsCard component
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme for PrimeReact
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons
import 'primeflex/primeflex.css'; // PrimeFlex for layout

export default function PastEventsCarousel() {
  // Sample data for the carousel
  const events = [
    {
      id: 1,
      image: './src/assets/2.jpeg',
      title: 'Lizard',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.',
    },
    {
      id: 2,
      image: './src/assets/3.jpeg',
      title: 'Gecko',
      description:
        'Geckos are small, nocturnal lizards found in warm climates. They have unique adhesive pads on their feet.',
    },
    {
      id: 3,
      image: './src/assets/5.jpeg',
      title: 'Chameleon',
      description:
        'Chameleons are known for their ability to change skin color and their independently moving eyes.',
    },
    {
      id: 4,
      image: './src/assets/4.jpeg',
      title: 'Iguana',
      description:
        'Iguanas are herbivorous lizards that are native to Central and South America. They are known for their long tails.',
    },
  ];

  // Responsive options for the carousel
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  // Template for rendering each carousel item
  const productTemplate = (event) => {
    return (
      <div className="p-3">
        <PastEventsCard
          image={event.image}
          title={event.title}
          description={event.description}
        />
      </div>
    );
  };

  return (
    <div className="m-6">
      <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">
        Past Events
      </h2>
      <Carousel
        value={events}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        autoplayInterval={3000}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
