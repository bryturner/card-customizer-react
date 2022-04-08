import styled from "styled-components";

const OutputStyled = styled.output`
  border: 2px solid black;
  position: absolute;
  height: auto;
  width: auto;
  margin: 1rem;
  font-weight: 500;
  z-index: 999;
  cursor: grab;
  color: ${(props) => props.fontColor};
  font-size: ${(props) => props.fontSize};
`;

export const FullNameOutputStyled = styled(OutputStyled)`
  /* font-size: ${(props) => props.fontSize}; */
`;

export const AddlInfoOutputStyled = styled(OutputStyled)`
  white-space: pre-wrap;
`;
