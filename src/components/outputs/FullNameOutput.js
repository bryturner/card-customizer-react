import React, { useContext, useRef } from "react";
import Draggable from "react-draggable";
import CardDetailsContext from "../../context/CardDetailsContext";

import { FullNameOutputStyled } from "../../styles/Outputs.styled";

function FullNameOutput({
  form,
  htmlFor,
  fullName,
  woodType,
  fontSize,
  fontColor,
}) {
  const { fullNameDeltaPosition, setFullNameDeltaPosition } =
    useContext(CardDetailsContext);

  const nodeRef = useRef(null);

  function getDeltaPositionOnDrag(e, ui) {
    const { x, y } = fullNameDeltaPosition;
    setFullNameDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  }

  function getDeltaPosition(e) {
    console.log(
      fullNameDeltaPosition.x.toFixed(0),
      fullNameDeltaPosition.y.toFixed(0)
    );
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
