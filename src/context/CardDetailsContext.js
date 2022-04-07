import React, { createContext, useState } from "react";

const CardDetailsContext = createContext();

export function CardDetailsContextProvider(props) {
  const [firstName, setFirstName] = useState("");
  return (
    <CardDetailsContext.Provider value={{ firstName, setFirstName }}>
      {props.children}
    </CardDetailsContext.Provider>
  );
}

export default CardDetailsContext;
