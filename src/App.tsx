import React from "react";
import CarPage from "./pages/cars/CarPage";
import "./App.css";
import Form from "./pages/form/Form";

const App = () => {
  return (
    <div className="app">
      <CarPage />
      <Form />
    </div>
  );
};

export default App;
