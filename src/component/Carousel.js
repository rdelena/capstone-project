import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../img/NPCDialog.jpg";
import Image2 from "../img/ForestFight.jpg";
import Image3 from "../img/Town2.jpg";
import Image4 from "../img/Temple.jpg";
import Image5 from "../img/Homestead.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../CarouselContainer.css";

const ImageCarousel = () => {
  return (
    <Carousel showStatus={false} showThumbs={false} autoPlay infiniteLoop>
      <div className="slide">
        <img src={Image1} alt="MapScreenshot1" />
        <div className="slide-content">
          <h3>Slide 1 Title</h3>
          <p>Slide 1 Description</p>
        </div>
      </div>
      <div className="slide">
        <img src={Image2} alt="MapScroonshot2" />
        <div className="slide-content">
          <h3>Slide 2 Title</h3>
          <p>Slide 2 Description</p>
        </div>
      </div>
      <div className="slide">
        <img src={Image3} alt="MapScroonshot2" />
        <div className="slide-content">
          <h3>Slide 3 Title</h3>
          <p>Slide 3 Description</p>
        </div>
      </div>
      <div className="slide">
        <img src={Image4} alt="MapScroonshot2" />
        <div className="slide-content">
          <h3>Slide 4 Title</h3>
          <p>Slide 4 Description</p>
        </div>
      </div>
      <div className="slide">
        <img src={Image5} alt="MapScroonshot2" />
        <div className="slide-content">
          <h3>Slide 5 Title</h3>
          <p>Slide 5 Description</p>
        </div>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
