import React, { useEffect, useState } from "react";
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
} from "../components/inputs";
import AdditionalInfoOutput from "../components/outputs/AdditionalInfoOutput";

function CreateCardPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [woodType, setWoodType] = useState("spruce");
  const [fullName, setFullName] = useState("");
  const [textLine1, setTextLine1] = useState("");
  const [textLine2, setTextLine2] = useState("");
  const [textLine3, setTextLine3] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [fontSize, setFontSize] = useState("24px");
  const [fontColor, setFontColor] = useState("#fff");

  function updateFullNameOutput() {
    const concatName = `${firstName} ${lastName}`;
    setFullName(concatName);
  }

  //   function updateAddInfoOutput() {
  // 	const concatName = `${firstName} ${lastName}`;
  // 	setFullName(concatName);
  //  }

  useEffect(() => {
    updateFullNameOutput();
  }, [updateFullNameOutput]);
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
                fontSize={fontSize}
                fontColor={fontColor}
              />
              <AdditionalInfoOutput
                form="create-card-form"
                htmlFor="text-line-1, text-line-2, text-line-3"
              />
            </OutputWrapper>
          </CardOutline>
        </CardContainer>

        <CreateCardForm id="create-card-form">
          <TextInput
            setState={setFirstName}
            value={firstName}
            id="first-name"
            placeholder="First"
          />
          <TextInput
            setState={setLastName}
            value={lastName}
            id="last-name"
            placeholder="Last"
          />
          <TextInput
            setState={setTextLine1}
            value={textLine1}
            id="text-line-1"
          />
          <TextInput
            setState={setTextLine2}
            value={textLine2}
            id="text-line-2"
          />
          <TextInput
            setState={setTextLine3}
            value={textLine3}
            id="text-line-3"
          />
          <WoodTypeRadioGroup setWoodType={setWoodType} />
          <FontSizeSelect setFontSize={setFontSize} fontSize={fontSize} />
          <FontColorSelect fontColor={fontColor} setFontColor={setFontColor} />
        </CreateCardForm>
      </Grid2Cols>
    </>
  );
}

export default CreateCardPage;
