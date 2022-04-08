import React from "react";

function FontStyleSelect({ fontStyle, setState }) {
  return (
    <select
      defaultValue={fontStyle}
      onChange={(e) => {
        setState(e.target.value);
      }}
    >
      <option value="serif">Serif</option>
      <option value="sans-serif">Sans-serif</option>
      <option value="monospace">monospace</option>
    </select>
  );
}

export default FontStyleSelect;
