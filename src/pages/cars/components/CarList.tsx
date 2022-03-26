import React from "react";
import { Car } from "../models/car";
import "../assets/car.css";
import CarCard from "./CarCard";

type Props = {
  cars: Car[];
};

export default function CarList({ cars }: Props) {
  return (
    <ul className="car-list">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </ul>
  );
}
