import React from "react";
import WoodTypeLabel from "../labels/WoodTypeLabel";
import WoodTypeRadio from "./WoodTypeRadio";
import spruceImage from "../../assets/spruce.jpg";
import beechImage from "../../assets/beech.jpg";
import blackImage from "../../assets/black.jpg";
import mapleImage from "../../assets/maple.jpg";
import { WoodTypeRadioImageStyled } from "../../styles";

function WoodTypeRadioGroup({ woodType, setWoodType }) {
  return (
    <div>
      <WoodTypeLabel>
        <WoodTypeRadioImageStyled src={spruceImage} />
        <WoodTypeRadio value="spruce" setWoodType={setWoodType} />
      </WoodTypeLabel>
      <WoodTypeLabel>
        <WoodTypeRadioImageStyled src={beechImage} />
        <WoodTypeRadio value="beech" setWoodType={setWoodType} />
      </WoodTypeLabel>
      <WoodTypeLabel>
        <WoodTypeRadioImageStyled src={blackImage} />
        <WoodTypeRadio value="black" setWoodType={setWoodType} />
      </WoodTypeLabel>
      <WoodTypeLabel>
        <WoodTypeRadioImageStyled src={mapleImage} />
        <WoodTypeRadio value="maple" setWoodType={setWoodType} />
      </WoodTypeLabel>
    </div>
  );
}

export default WoodTypeRadioGroup;
