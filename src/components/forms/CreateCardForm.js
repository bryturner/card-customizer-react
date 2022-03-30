import React from "react";

function CreateCardForm(props, { id }) {
  return <form id={id}>{props.children}</form>;
}

export default CreateCardForm;
