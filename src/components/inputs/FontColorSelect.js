import React, { useEffect, useRef } from "react";

function FontColorSelect({ fontColor, setFontColor, woodType }) {
  const blackFontRef = useRef(null);

  function toggleBlackFontDisabled() {
    if (woodType === "black") {
      blackFontRef.current.disabled = true;
    } else {
      blackFontRef.current.disabled = false;
    }
  }

  useEffect(() => {
    toggleBlackFontDisabled();
  }, [toggleBlackFontDisabled]);
  return (
    <select
      value={fontColor}
      onChange={(e) => {
        setFontColor(e.target.value);
        toggleBlackFontDisabled();
      }}
    >
      <option ref={blackFontRef} value="#111">
        Black
      </option>
      <option value="#888">Light Gray</option>
      <option value="#e0cbaf">Tan</option>
      <option value="#fff">White</option>
    </select>
  );
}

export default FontColorSelect;
