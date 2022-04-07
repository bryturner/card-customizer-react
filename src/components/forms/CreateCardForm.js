import React from "react";
import { useNavigate } from "react-router-dom";

function CreateCardForm(props, { id }) {
  const navigate = useNavigate();

  function saveCardDetails(e) {
    e.preventDefault();

    navigate("/confirmation");
  }
  return (
    <form id={id} onSubmit={saveCardDetails}>
      {props.children}
    </form>
  );
}

export default CreateCardForm;
