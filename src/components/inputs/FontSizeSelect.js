import React from "react";

function FontSizeSelect({ fontSize, setFontSize }) {
  return (
    <select
      defaultValue={fontSize}
      onChange={(e) => {
        setFontSize(e.target.value);
      }}
    >
      <option value="18px">18</option>
      <option value="24px">24</option>
      <option value="36px">36</option>
      <option value="48px">48</option>
    </select>
  );
}

export default FontSizeSelect;
