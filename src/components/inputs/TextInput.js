import React from "react";

function TextInput({ value, setState, id, updateMarginRight }) {
  //   function updateMarginRight() {
  //     //   control margin right on output onChange function
  //     // Increases and decreases based on the width px of the character typed in the input
  //     const rect = document
  //       .getElementById("full-name-output")
  //       .getBoundingClientRect();

  //     const { height, width } = rect;
  //     console.log(height, width);
  //   }

  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => {
        setState(e.target.value);
        updateMarginRight();
      }}
    />
  );
}

export default TextInput;
