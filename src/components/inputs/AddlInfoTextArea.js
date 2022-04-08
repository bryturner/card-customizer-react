import React from "react";

function AddlInfoTextArea({ id, setState, value }) {
  return (
    <textarea
      id={id}
      onChange={(e) => {
        setState(e.target.value);
      }}
      value={value}
    />
  );
}

export default AddlInfoTextArea;
