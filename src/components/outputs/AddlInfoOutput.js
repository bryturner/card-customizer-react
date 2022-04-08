import React, { useContext, useRef } from "react";
import Draggable from "react-draggable";
import CardDetailsContext from "../../context/CardDetailsContext";
import { AddlInfoOutputStyled } from "../../styles/Outputs.styled";

function AddlInfoOutput({ form, htmlFor, fontSize, fontColor, addlInfo }) {
  const { addlInfoDeltaPosition, setAddlInfoDeltaPosition } =
    useContext(CardDetailsContext);

  const nodeRef = useRef(null);

  function getDeltaPositionOnDrag(e, ui) {
    const { x, y } = addlInfoDeltaPosition;
    setAddlInfoDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  }

  function getDeltaPosition(e) {
    console.log(
      addlInfoDeltaPosition.x.toFixed(0),
      addlInfoDeltaPosition.y.toFixed(0)
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
      <AddlInfoOutputStyled
        id="additional-info-output"
        ref={nodeRef}
        form={form}
        htmlFor={htmlFor}
        fontColor={fontColor}
        fontSize={fontSize}
      >
        {addlInfo}
      </AddlInfoOutputStyled>
    </Draggable>
  );
}

export default AddlInfoOutput;
