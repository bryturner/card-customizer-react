import React, { useContext } from "react";

import CreateCardForm from "../components/forms/CreateCardForm";
import { Grid2Cols } from "../styles/Grids.styled";
import { CardOutline } from "../styles/Card.styled";
import { CardContainer } from "../styles/Containers.styled";
import { CardImageWrapper, OutputWrapper } from "../styles/Wrappers.styled";
import CardImage from "../components/card/CardImage";
import FullNameOutput from "../components/outputs/FullNameOutput";
import {
  FontColorSelect,
  TextInput,
  FontSizeSelect,
  WoodTypeRadioGroup,
  AddlInfoTextArea,
} from "../components/inputs";
import AddlInfoOutput from "../components/outputs/AddlInfoOutput";
import CardDetailsContext from "../context/CardDetailsContext";
import SubmitFormButton from "../components/buttons/SubmitFormButton";

function CreateCardPage() {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    woodType,
    setWoodType,
    fullName,
    fullNameFontSize,
    setFullNameFontSize,
    addlInfoFontSize,
    setAddlInfoFontSize,
    fontColor,
    setFontColor,
    setTextAreaAddlInfo,
    textAreaAddlInfo,
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
                htmlFor="first-name, last-name"
                fullName={fullName}
                woodType={woodType}
                fontSize={fullNameFontSize}
                fontColor={fontColor}
              />
              <AddlInfoOutput
                form="create-card-form"
                htmlFor="text-area"
                addlInfo={textAreaAddlInfo}
                fontColor={fontColor}
                fontSize={addlInfoFontSize}
              />
            </OutputWrapper>
          </CardOutline>
        </CardContainer>
        <CreateCardForm id="create-card-form">
          <TextInput
            id="first-name"
            setState={setFirstName}
            value={firstName}
            placeholder="First"
          />
          <TextInput
            id="last-name"
            setState={setLastName}
            value={lastName}
            placeholder="Last"
          />
          <FontSizeSelect
            setFontSize={setFullNameFontSize}
            fontSize={fullNameFontSize}
          />
          <AddlInfoTextArea
            id="text-area"
            setState={setTextAreaAddlInfo}
            value={textAreaAddlInfo}
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
