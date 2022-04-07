import React, { useContext } from "react";
import CardDetailsContext from "../context/CardDetailsContext";

function ConfirmationPage() {
  const {
    firstName,
    lastName,
    woodType,
    fullName,
    textLine1,
    textLine2,
    textLine3,
    additionalInfo,
    fontSize,
    fontColor,
  } = useContext(CardDetailsContext);

  return (
    <div>
      {firstName}, {lastName}
    </div>
  );
}

export default ConfirmationPage;
