import React, { useState, useEffect } from "react";
import CarList from "./components/CarList";
import { Car } from "./models/car";

export default function CarPage() {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch("images?limit=10")
      .then((res) => res.json())
      .then((data: Car[]) => {
        console.log("Success:", data);
        setCars(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <div>{cars && <CarList cars={cars} />}</div>;
}
