import React from "react";
import { CarouselComponent } from "./components/Corousel";
import PastEventsCarousel from "./components/PastEventsCorousel";
import UpcomingEventsCarousel from "./components/UpcomingEventsCorousel";
import ImageGallery from "./components/imageGallery";

function App() {
  return (
    <>
    <div className="App">
      <CarouselComponent />
    </div>
    <div>
      <UpcomingEventsCarousel/>
    </div>
    <div>
      <PastEventsCarousel/>
    </div>
    <div>
      <ImageGallery/>
    </div>

    </>
  );
}

export default App;
