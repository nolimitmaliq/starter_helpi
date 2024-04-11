import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import image1 from "./image 1.jpg";
import image3 from "./image 2.jpg";
import image4 from "./image 4.jpg";
import image5 from "./image 5.jpg";
import { Image } from "openai/resources";
export function ChangeImages(): JSX.Element {
  type Images = "image 1.jpg" | "image 2.jpg" | "image 4.jpg" | "image 5.jpg";

  const photoTransitionForward: Record<Images, Images> = {
    "image 1.jpg": "image 2.jpg",
    "image 2.jpg": "image 4.jpg",
    "image 4.jpg": "image 5.jpg",
    "image 5.jpg": "image 1.jpg",
    // "https://rb.gy/64cext": "https://shorturl.at/lmrC9",
  };
  const photoTransitionBackward: Record<Images, Images> = {
    "image 5.jpg": "image 4.jpg",
    "image 4.jpg": "image 2.jpg",
    "image 2.jpg": "image 1.jpg",
    "image 1.jpg": "image 5.jpg",
    // "https://shorturl.at/lmrC9": "https://rb.gy/64cext",
  };
  const [currImage, setImage] = useState<Images>("image 1.jpg");
  //const [direction, setDirection] = useState<"forward" | "backward">();

  function nextImage() {
    const image = photoTransitionForward[currImage];
    setImage(image);
    //setDirection("forward");
  }
  function previousImage() {
    const image = photoTransitionBackward[currImage];
    setImage(image);
    //setDirection("backward");
  }
  return (
    <div className="ImageContainer">
      <img src={currImage} alt="Career Photos" />
      <Button onClick={nextImage} className="NavigationButtonRight">
        {<FaArrowLeft />}
      </Button>
      <Button onClick={previousImage} className="NavigationButtonLeft">
        {<FaArrowRight />}
      </Button>
    </div>
  );
}
