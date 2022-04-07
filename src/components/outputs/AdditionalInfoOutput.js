import React, { useContext, useRef } from "react";
import Draggable from "react-draggable";
import CardDetailsContext from "../../context/CardDetailsContext";

import { AdditionalInfoOutputStyled } from "../../styles/Outputs.styled";

function AdditionalInfoOutput({ form, htmlFor, fontColor, additionalInfo }) {
  const { additionalInfoDeltaPosition, setAdditionalInfoDeltaPosition } =
    useContext(CardDetailsContext);

  const nodeRef = useRef(null);

  function getDeltaPositionOnDrag(e, ui) {
    const { x, y } = additionalInfoDeltaPosition;
    setAdditionalInfoDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  }

  function getDeltaPosition(e) {
    console.log(
      additionalInfoDeltaPosition.x.toFixed(0),
      additionalInfoDeltaPosition.y.toFixed(0)
    );
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
