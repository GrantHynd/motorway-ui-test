import React, { useState } from "react";
import { Car } from "../models/car";
import "../assets/car.css";

type Props = {
  car: Car;
  onImageClick: (car: Car) => void;
};

export default function CarCard({ car, onImageClick }: Props) {
  // This state would usually just be retrieved from active user's data via Context
  const [isLiked, setIsLiked] = useState(false);

  function handleLike(id: string) {
    setIsLiked(!isLiked); // Would usually be a request to update user model
    // Would send request to update image likes (use the image id)
  }

  return (
    <li className="car-card">
      <div className="car-image-holder" onClick={() => onImageClick(car)}>
        <img
          className={`car-thumbnail ${isLiked ? "car-thumbnail--liked" : ""}`}
          src={`${car.url}.jpg`}
          alt={car.alt_description}
        />
        {isLiked && <div className="heart-overlay"></div>}
      </div>
      <div className="car-desc" title={car.description || car.alt_description}>
        {car.description || car.alt_description}
      </div>
      <div className="the-heart-triangle">
        <button onClick={() => handleLike(car.id)}>
          {isLiked ? "💔" : "❤️"} {car.likes}
        </button>
      </div>
    </li>
  );
}
