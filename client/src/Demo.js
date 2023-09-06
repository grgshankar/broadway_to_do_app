import React, { useState } from "react";

const Demo = () => {
  // const [color, setColor] = useState("red");
  const [car, setCar] = useState({
    color: "red",
    model: "ford",
  });
  const updateCar = () => {
    const carColor = document.getElementById("carColor").value;
    console.log(carColor);
    setCar((previousCar) => {
      return { ...previousCar, color: carColor };
    });
  };
  return (
    <>
      <h1>
        Car Color is {car?.color} and the brand is{car?.model}
      </h1>
      <input
        id="carColor"
        type="text"
        placeholder="color"
        // value={car.color}
        onChange={updateCar}
      />
      {/* <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("green")}>green</button> */}

      <button onClick={updateCar}>Update Car Color</button>
    </>
  );
};

export default Demo;
