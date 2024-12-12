import React, { useState, useEffect } from "react";
import "./CarouselStyle.scss"; // Import the carousel styles
import ReactMeetup from "../assets/images/ReactMeetup.jpg"; // Import the new image
import TeamAward from "../assets/images/TeamAward.jpg"; // Import the new image

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming 3 slides
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <div className="carousel-item">
          <img src={ReactMeetup} alt="Slide 1" />
          <div className="description">Description for Slide 1</div>
        </div>
        <div className="carousel-item">
          <img src={TeamAward} alt="Slide 2" />
          <div className="description">Description for Slide 2</div>
        </div>
        <div className="carousel-item">
          <img src={ReactMeetup} alt="Slide 3" />
          <div className="description">Description for Slide 3</div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
