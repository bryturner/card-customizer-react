import React, { useEffect, useState } from "react";
import CreateCardForm from "../components/forms/CreateCardForm";
import WoodTypeRadioGroup from "../components/inputs/WoodTypeRadioGroup";
import TextInput from "../components/inputs/TextInput";
import { Grid2Cols } from "../styles/Grids.styled";
import { CardOutline } from "../styles/Card.styled";
import { CardContainer } from "../styles/Containers.styled";
import {
  CardImageWrapper,
  FullNameOutputWrapper,
} from "../styles/Wrappers.styled";
import CardImage from "../components/card/CardImage";
import FullNameOutput from "../components/outputs/FullNameOutput";
import FontSizeSelect from "../components/inputs/FontSizeSelect";
import { FontColorSelect } from "../components/inputs";

// Font size input / text color options input
// default radio checked
function CreateCardPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [woodType, setWoodType] = useState("spruce");
  const [fullName, setFullName] = useState("");
  const [fontSize, setFontSize] = useState("24px");
  const [fontColor, setFontColor] = useState("#888");

  function updateFullNameOutput() {
    const concatName = `${firstName} ${lastName}`;
    setFullName(concatName);
  }

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
            <FullNameOutputWrapper>
              <FullNameOutput
                form="create-card-form"
                htmlFor="first-name, last-name"
                fullName={fullName}
                woodType={woodType}
                fontSize={fontSize}
                fontColor={fontColor}
              />
            </FullNameOutputWrapper>
          </CardOutline>
        </CardContainer>

        <CreateCardForm id="create-card-form">
          <TextInput
            setState={setFirstName}
            value={firstName}
            id="first-name"
          />
          <TextInput setState={setLastName} value={lastName} id="last-name" />
          <TextInput
            setState={setAddressLine1}
            value={addressLine1}
            id="address-1"
          />
          <TextInput
            setState={setAddressLine2}
            value={addressLine2}
            id="address-2"
          />
          <WoodTypeRadioGroup setWoodType={setWoodType} />
          <FontSizeSelect setFontSize={setFontSize} fontSize={fontSize} />
          <FontColorSelect
            fontColor={fontColor}
            setFontColor={setFontColor}
            woodType={woodType}
          />
        </CreateCardForm>
      </Grid2Cols>
    </>
  );
}

export default CreateCardPage;
