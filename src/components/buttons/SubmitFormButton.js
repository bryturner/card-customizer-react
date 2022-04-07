import React from "react";

function SubmitFormButton(props, { type }) {
  return <button type={type}>{props.children}</button>;
}

export default SubmitFormButton;
