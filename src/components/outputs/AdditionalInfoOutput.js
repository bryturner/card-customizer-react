import React, { useRef, useState } from "react";
import Draggable from "react-draggable";

import { AdditionalInfoOutputStyled } from "../../styles/Outputs.styled";

function AdditionalInfoOutput({ form, htmlFor }) {
  const nodeRef = useRef(null);

  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });

  function getDeltaPosition(e) {
    console.log(deltaPosition.x.toFixed(0), deltaPosition.y.toFixed(0));
  }
  return (
    <Draggable nodeRef={nodeRef} bounds="parent" onStop={getDeltaPosition}>
      <AdditionalInfoOutputStyled
        ref={nodeRef}
        id="additional-info-output"
        form={form}
        htmlFor={htmlFor}
      />
    </Draggable>
  );
}

export default AdditionalInfoOutput;
