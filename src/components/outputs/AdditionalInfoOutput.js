import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

import { AdditionalInfoOutputStyled } from "../../styles/Outputs.styled";

function AdditionalInfoOutput({ form, htmlFor, fontColor, additionalInfo }) {
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
      defaultPosition={{ x: 80, y: 250 }}
      bounds="parent"
      nodeRef={nodeRef}
      onDrag={getDeltaPositionOnDrag}
      onStop={getDeltaPosition}
      grid={[10, 10]}
    >
      <AdditionalInfoOutputStyled
        id="additional-info-output"
        ref={nodeRef}
        form={form}
        htmlFor={htmlFor}
        fontColor={fontColor}
      >
        Additional Info
        {additionalInfo}
      </AdditionalInfoOutputStyled>
    </Draggable>
  );
}

export default AdditionalInfoOutput;
