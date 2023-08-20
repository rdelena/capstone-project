import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../img/Homestead.jpg";
import Image2 from "../img/ForestFight.jpg";
import Image3 from "../img/Town2.jpg";
import Image4 from "../img/Temple.jpg";
import Image5 from "../img/SnowMountain.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CarouselContainer.css";

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel
        className="carousel"
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
      >
        <div className="slide">
          <img src={Image1} alt="PlayerHome_Screenshot" />
          <div className="slide-content">
            <h3>Begin Your Journey</h3>
          </div>
        </div>
        <div className="slide">
          <img src={Image2} alt="Forest_Screenshot" />
          <div className="slide-content">
            <h3>Battle Fierce Monsters</h3>
          </div>
        </div>
        <div className="slide">
          <img src={Image3} alt="Town_Screenshot" />
          <div className="slide-content">
            <h3>Visit Different Towns</h3>
          </div>
        </div>
        <div className="slide">
          <img src={Image4} alt="Temple_Screenshot" />
          <div className="slide-content">
            <h3>Journey Your Way Through Treacherous Dungeons</h3>
          </div>
        </div>
        <div className="slide">
          <img src={Image5} alt="Mountain_Screenshot" />
          <div className="slide-content">
            <h3>Discover Different Environments</h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
