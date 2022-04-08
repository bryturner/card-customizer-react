import React, { useContext } from "react";

import CardDetailsContext from "../context/CardDetailsContext";
import CreateCardForm from "../components/forms/CreateCardForm";
import CardImage from "../components/card/CardImage";
import {
  FontColorSelect,
  TextInput,
  FontSizeSelect,
  WoodTypeRadioGroup,
  AddlInfoTextArea,
} from "../components/inputs";
import AddlInfoOutput from "../components/outputs/AddlInfoOutput";
import FullNameOutput from "../components/outputs/FullNameOutput";
import SubmitFormButton from "../components/buttons/SubmitFormButton";

import { Grid2Cols } from "../styles/Grids.styled";
import { CardOutline } from "../styles/Card.styled";
import { CardContainer } from "../styles/Containers.styled";
import { CardImageWrapper, OutputWrapper } from "../styles/Wrappers.styled";

function CreateCardPage() {
  const {
    woodType,
    setWoodType,
    fullName,
    setFullName,
    fullNameFontSize,
    setFullNameFontSize,
    addlInfoFontSize,
    fullNameFontStyle,
    setFullNameFontStyle,
    fullNameFontWeight,
    setFullNameFontWeight,
    addlInfoFontStyle,
    setAddlInfoFontStyle,
    addlInfoFontWeight,
    setAddlInfoFontWeight,
    setAddlInfoFontSize,
    fontColor,
    setFontColor,
    setAddlInfo,
    addlInfo,
  } = useContext(CardDetailsContext);

  return (
    <>
      <Grid2Cols>
        <CardContainer>
          <CardOutline>
            <CardImageWrapper>
              <CardImage woodType={woodType} />
            </CardImageWrapper>
            <OutputWrapper>
              <FullNameOutput
                form="create-card-form"
                htmlFor="full-name"
                fullName={fullName}
                woodType={woodType}
                fontSize={fullNameFontSize}
                fontColor={fontColor}
              />
              <AddlInfoOutput
                form="create-card-form"
                htmlFor="text-area"
                addlInfo={addlInfo}
                fontColor={fontColor}
                fontSize={addlInfoFontSize}
              />
            </OutputWrapper>
          </CardOutline>
        </CardContainer>
        <CreateCardForm id="create-card-form">
          <TextInput
            id="full-name"
            setState={setFullName}
            value={fullName}
            placeholder="Jane Doe"
          />
          <FontSizeSelect
            setFontSize={setFullNameFontSize}
            fontSize={fullNameFontSize}
          />
          <AddlInfoTextArea
            id="text-area"
            setState={setAddlInfo}
            value={addlInfo}
          ></AddlInfoTextArea>
          <FontSizeSelect
            setFontSize={setAddlInfoFontSize}
            fontSize={addlInfoFontSize}
          />
          <WoodTypeRadioGroup setWoodType={setWoodType} />
          <FontColorSelect fontColor={fontColor} setFontColor={setFontColor} />
          <SubmitFormButton type="submit">Submit</SubmitFormButton>
        </CreateCardForm>
      </Grid2Cols>
    </>
  );
}

export default CreateCardPage;
