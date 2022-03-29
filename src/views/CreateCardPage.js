import React, { useEffect, useState } from "react";
import CreateCardForm from "../components/forms/CreateCardForm";
import WoodTypeRadioGroup from "../components/inputs/WoodTypeRadioGroup";
import TextInput from "../components/inputs/TextInput";

function CreateCardPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [woodType, setWoodType] = useState("");

  //   function getRadioValue(e) {
  //     setWoodType(e);
  //   }
  //   useEffect(() => {
  //     localStorage.setItem("woodType", JSON.stringify(woodType));
  //   }, [woodType]);
  return (
    <main>
      <CreateCardForm>
        <TextInput setState={setFirstName} value={firstName} />
        <TextInput setState={setLastName} value={lastName} />
        <TextInput setState={setAddressLine1} value={addressLine1} />
        <TextInput setState={setAddressLine2} value={addressLine2} />
        <WoodTypeRadioGroup woodType={woodType} setWoodType={setWoodType} />
      </CreateCardForm>
    </main>
  );
}

export default CreateCardPage;
