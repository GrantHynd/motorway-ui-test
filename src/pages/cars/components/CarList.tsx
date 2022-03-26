import React, { useState } from "react";
import { Car } from "../models/car";
import CarCard from "./CarCard";
import ImageModal from "../../common/image-modal/ImageModal";
import "../assets/car.css";
import "../../common/image-modal/assets/modal.css";

type Props = {
  cars: Car[];
};

export default function CarList({ cars }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | undefined>(undefined);

  function onImageClick(car: Car) {
    setSelectedCar(car);
    setIsModalOpen(true);
  }

  return (
    <>
      <ImageModal
        title={selectedCar?.description || selectedCar?.alt_description || ""}
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <img className="modal-image" src={`${selectedCar?.url}.jpg`} />
      </ImageModal>
      <ul className="car-list">
        {cars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onImageClick={(car: Car) => onImageClick(car)}
          />
        ))}
      </ul>
    </>
  );
}
