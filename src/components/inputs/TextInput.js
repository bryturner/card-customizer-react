import React from "react";

function TextInput({ value, setState }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setState(e.target.value);
      }}
    />
  );
}

export default TextInput;
