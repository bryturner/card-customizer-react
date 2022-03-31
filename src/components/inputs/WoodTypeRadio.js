import React from "react";

function WoodTypeRadio({ value, setWoodType, defaultChecked }) {
  return (
    <input
      type="radio"
      name="card-color"
      defaultChecked={defaultChecked}
      value={value}
      onChange={(e) => setWoodType(e.target.value)}
    />
  );
}

export default WoodTypeRadio;
