import React from "react";
import Planet1Image from "./Spinning_Mars.gif";
import Planet2Image from "./planet3.jpg";
import MilkyWayImage from "./milkyway.jpg";

const PlanetComponent: React.FC = () => {
  return (
    <div className="planet-container">
      <img
        src={Planet1Image}
        alt="Planet 1"
        className="planet"
        style={{
          position: "absolute",
          top: "900px", //essentially positioning images in the homescreeen
          left: "0%",
          width: "250px",
          height: "250px",
        }}
      />
      <img
        src={Planet2Image}
        alt="Planet 2"
        className="planet"
        style={{
          position: "absolute",
          top: "900px",
          left: "80%",
          width: "250px",
          height: "270px",
        }}
      />

      <img
        src={MilkyWayImage}
        alt="Planet 2"
        className="planet"
        style={{
          position: "absolute",
          top: "1280px",
          left: "80%",
          width: "300px",
          height: "200px",
        }}
      />
    </div>
  );
};

export default PlanetComponent;
