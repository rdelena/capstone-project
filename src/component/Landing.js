import React from "react";
import ImageCarousel from "./Carousel";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landingPage">
      <ImageCarousel
        style={{ overflow: "hidden", width: "100%", height: "400px" }}
      />
      <div className="overlay-content">
        <h1>Journey into the Land of Gaoryn</h1>
        <h3>
          Embark on an Epic Adventure: Unleash Your Imagination and Battle an
          Onslaught of Monsters in Our Thrilling New Web Game!
        </h3>
        <h3>Join the Adventure Today!</h3>
        <Link to="/register" style={{ color: "blue" }}>
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default Landing;
