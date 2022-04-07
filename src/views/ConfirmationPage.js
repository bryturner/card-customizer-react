import React, { useContext } from "react";
import CardDetailsContext from "../context/CardDetailsContext";

function ConfirmationPage() {
  const { firstName } = useContext(CardDetailsContext);

  return <div>{firstName}</div>;
}

export default ConfirmationPage;
