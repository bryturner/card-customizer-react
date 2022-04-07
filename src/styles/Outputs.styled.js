import styled from "styled-components";

const OutputStyled = styled.output`
  border: 2px solid black;
  position: absolute;
  /* bottom: 1rem;
  left: 25rem; */
  height: auto;
  width: auto;
  margin: 1rem;
  font-weight: 500;
  z-index: 999;
  cursor: grab;
`;

export const FullNameOutputStyled = styled(OutputStyled)`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.fontColor};
`;

export const AdditionalInfoOutputStyled = styled(OutputStyled)`
  color: ${(props) => props.fontColor};
`;
