import React, { useRef, useState } from "react";
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
      defaultPosition={{ x: 80, y: 210 }}
      bounds="parent"
      nodeRef={nodeRef}
      onDrag={getDeltaPositionOnDrag}
      onStop={getDeltaPosition}
      grid={[10, 10]}
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
        Bryan
        {fullName}
        {/* {deltaPosition.x.toFixed(0)}, {deltaPosition.y.toFixed(0)} */}
      </FullNameOutputStyled>
    </Draggable>
  );
}

export default FullNameOutput;
