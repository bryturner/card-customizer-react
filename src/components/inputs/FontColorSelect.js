import React from "react";

function FontColorSelect({ fontColor, setFontColor }) {
  return (
    <select
      value={fontColor}
      onChange={(e) => {
        setFontColor(e.target.value);
      }}
    >
      <option value="#666">Dark Gray</option>
      <option value="#aaa">Light Gray</option>
      <option value="#e0cbaf">Tan</option>
      <option value="#fff">White</option>
    </select>
  );
}

export default FontColorSelect;
