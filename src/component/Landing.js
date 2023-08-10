import React from "react";
import ImageCarousel from "./Carousel";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landingPage" style={{ fontFamily: "PressStart2P" }}>
      <h1>Journey into the Land of Gaoryn</h1>
      <h3>
        Embark on an Epic Adventure: Unleash Your Imagination and Conquer New
        Worlds in Our Thrilling New Web Game!
      </h3>
      <ImageCarousel />
      <h3>Join the Adventure Today!</h3>
      <Link to="/register" style={{ color: "blue" }}>
        Create an Account
      </Link>
    </div>
  );
};

export default Landing;
