import styled from "styled-components";

export const CardOutline = styled.div`
  width: 70rem;
  height: 40rem;
  border: 4px solid black;

  border-radius: 11px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  /* transition: all 0.3s; */
`;

export const CardImageStyled = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`;

export const FullNameOutputStyled = styled.output`
  border: 2px solid black;
  position: absolute;
  bottom: 1rem;
  left: 25rem;
  height: auto;
  width: auto;
  margin: 1rem;

  /* text-align: center; */
  font-size: 2.4rem;
  font-weight: 500;
  z-index: 999;
  cursor: grab;
  /* color: #111; */
  color: ${(props) => (props.woodType === "black" ? "#fff" : "#111")};
`;
