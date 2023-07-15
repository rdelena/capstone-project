import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../img/gaoryn_screenshot1.jpg";
import Image2 from "../img/gaoryn_screenshot2.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = () => {
  return (
    <Carousel style={{ height: "400px", width: "400px" }}>
      <div>
        <img src={Image1} alt="MapScreenshot1" />
        <p>Map Overview of the Homestead & Twilight's Anchor</p>
      </div>
      <div>
        <img src={Image2} alt="MapScroonshot2" />
        <p>Ainzgale Forest</p>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
