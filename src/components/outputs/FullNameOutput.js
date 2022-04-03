import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";

import { FullNameOutputStyled } from "../../styles/Outputs.styled";

function FullNameOutput({
  form,
  htmlFor,
  fullName,
  woodType,
  fontSize,
  fontColor,
}) {
  const nodeRef = useRef(null);

  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });

  function getDeltaPositionOnDrag(e, ui) {
    const { x, y } = deltaPosition;
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  }

  function getDeltaPosition(e) {
    console.log(deltaPosition.x.toFixed(0), deltaPosition.y.toFixed(0));
  }

  return (
    <Draggable
      bounds="parent"
      nodeRef={nodeRef}
      onDrag={getDeltaPositionOnDrag}
      onStop={getDeltaPosition}
    >
      <FullNameOutputStyled
        id="full-name-output"
        ref={nodeRef}
        form={form}
        htmlFor={htmlFor}
        woodType={woodType}
        fontSize={fontSize}
        fontColor={fontColor}
      >
        {fullName}
        {/* {deltaPosition.x.toFixed(0)}, {deltaPosition.y.toFixed(0)} */}
      </FullNameOutputStyled>
    </Draggable>
  );
}

export default FullNameOutput;
