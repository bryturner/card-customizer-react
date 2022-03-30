import React, { useEffect, useRef, useState } from "react";
import { FullNameOutputStyled } from "../../styles/Card.styled";
import Draggable from "react-draggable";

function FullNameOutput({ form, htmlFor, fullName, outputWidth }) {
  const nodeRef = useRef(null);

  const [deltaPosition, setDeltaPosition] = useState({ x: 0, y: 0 });
  const [controlledPosition, setControlledPosition] = useState({
    x: 25,
    y: 10,
  });
  //   const [marginRight, setMarginRight] = useState(0);

  function handleDragCont(e, ui) {
    const { x, y } = controlledPosition;
    setControlledPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
    setDeltaPosition({ x: x + ui.deltaX, y: y + ui.deltaY });
  }

  function getDeltaPosition(e) {
    console.log(deltaPosition.x.toFixed(0), deltaPosition.y.toFixed(0));
  }

  return (
    <Draggable
      position={controlledPosition}
      nodeRef={nodeRef}
      bounds="parent"
      onDrag={handleDragCont}
      onStop={getDeltaPosition}
    >
      <FullNameOutputStyled
        id="full-name-output"
        form={form}
        htmlFor={htmlFor}
        ref={nodeRef}
        marginRight={outputWidth}
      >
        {fullName}
        {/* {deltaPosition.x.toFixed(0)}, {deltaPosition.y.toFixed(0)} */}
      </FullNameOutputStyled>
    </Draggable>
  );
}

export default FullNameOutput;
