import React from "react";
import spruceImage from "../../assets/spruce.jpg";
import beechImage from "../../assets/beech.jpg";
import blackImage from "../../assets/black.jpg";
import mapleImage from "../../assets/maple.jpg";
import { CardImageStyled } from "../../styles/Card.styled";

function CardImage({ woodType }) {
  return (
    <>
      {woodType === "spruce" && <CardImageStyled src={spruceImage} />}
      {woodType === "beech" && <CardImageStyled src={beechImage} />}
      {woodType === "black" && <CardImageStyled src={blackImage} />}
      {woodType === "maple" && <CardImageStyled src={mapleImage} />}
    </>
  );
}

export default CardImage;
