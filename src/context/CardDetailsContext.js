import React, { createContext, useState, useEffect, useCallback } from "react";

const CardDetailsContext = createContext();

export function CardDetailsContextProvider(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [textAreaAddlInfo, setTextAreaAddlInfo] = useState("");
  const [woodType, setWoodType] = useState("spruce");
  const [fullName, setFullName] = useState("");
  const [fontSize, setFontSize] = useState("24px");
  const [fontColor, setFontColor] = useState("#fff");
  const [fullNameDeltaPosition, setFullNameDeltaPosition] = useState({
    x: 0,
    y: 0,
  });
  const [addlInfoDeltaPosition, setAddlInfoDeltaPosition] = useState({
    x: 0,
    y: 0,
  });

  const updateFullNameOutput = useCallback(() => {
    const concatName = `${firstName} ${lastName}`;
    setFullName(concatName);
  }, [firstName, lastName]);

  const updateAddlInfoOutput = useCallback(() => {
    setTextAreaAddlInfo(textAreaAddlInfo);
  }, [textAreaAddlInfo]);

  useEffect(() => {
    updateFullNameOutput();
  }, [updateFullNameOutput]);

  useEffect(() => {
    updateAddlInfoOutput();
  }, [updateAddlInfoOutput]);

  return (
    <CardDetailsContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        woodType,
        setWoodType,
        fullName,
        fontSize,
        setFontSize,
        fontColor,
        setFontColor,
        fullNameDeltaPosition,
        setFullNameDeltaPosition,
        addlInfoDeltaPosition,
        setAddlInfoDeltaPosition,
        textAreaAddlInfo,
        setTextAreaAddlInfo,
      }}
    >
      {props.children}
    </CardDetailsContext.Provider>
  );
}

export default CardDetailsContext;
