import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export function ChangeImages(): JSX.Element {
  type Images =
    | " https://shorturl.at/lmrC9"
    | "https://shorturl.at/hzHQ7"
    | "https://shorturl.at/ahoCO"
    | "https://shorturl.at/lpzN2"
    | " https://rb.gy/64cext";
  const photoTransitionForward: Record<Images, Images> = {
    " https://shorturl.at/lmrC9": "https://shorturl.at/hzHQ7",
    "https://shorturl.at/hzHQ7": "https://shorturl.at/ahoCO",
    "https://shorturl.at/ahoCO": "https://shorturl.at/lpzN2",
    "https://shorturl.at/lpzN2": " https://rb.gy/64cext",
    " https://rb.gy/64cext": " https://shorturl.at/lmrC9",
  };
  const photoTransitionBackward: Record<Images, Images> = {
    " https://rb.gy/64cext": "https://shorturl.at/lpzN2",
    "https://shorturl.at/lpzN2": "https://shorturl.at/ahoCO",
    "https://shorturl.at/ahoCO": "https://shorturl.at/hzHQ7",
    "https://shorturl.at/hzHQ7": " https://shorturl.at/lmrC9",
    " https://shorturl.at/lmrC9": " https://rb.gy/64cext",
  };
  const [currImage, setImage] = useState<Images>(" https://shorturl.at/lmrC9");

  function nextImage() {
    const image = photoTransitionForward[currImage];
    setImage(image);
  }
  function previousImage() {
    const image = photoTransitionBackward[currImage];
    setImage(image);
  }
  return (
    <div className="ImageContainer">
      <img src={currImage} alt="Current" className="Image" />
      <Button onClick={previousImage} className="NavigationButtonLeft">
        <FaArrowLeft /> {/* Use left arrow icon */}
      </Button>
      <Button onClick={nextImage} className="NavigationButtonRight">
        <FaArrowRight /> {/* Use right arrow icon */}
      </Button>
    </div>
  );
}
