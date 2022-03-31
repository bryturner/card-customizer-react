import React from "react";

function TextInput({ value, setState, id, placeholder }) {
  return (
    <input
      placeholder={placeholder}
      id={id}
      type="text"
      value={value}
      onChange={(e) => {
        setState(e.target.value);
      }}
    />
  );
}

export default TextInput;
