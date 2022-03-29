import React from "react";

function WoodTypeRadio({ value, setWoodType }) {
  return (
    <input
      type="radio"
      name="card-color"
      value={value}
      onChange={(e) => setWoodType(e.target.value)}
    />
  );
}

export default WoodTypeRadio;
