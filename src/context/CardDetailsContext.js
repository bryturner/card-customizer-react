import React, { createContext, useState, useEffect, useCallback } from "react";

const CardDetailsContext = createContext();

export function CardDetailsContextProvider(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [woodType, setWoodType] = useState("spruce");
  const [fullName, setFullName] = useState("");
  const [textLine1, setTextLine1] = useState("");
  const [textLine2, setTextLine2] = useState("");
  const [textLine3, setTextLine3] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState([]);
  const [fontSize, setFontSize] = useState("24px");
  const [fontColor, setFontColor] = useState("#fff");
  const [fullNameDeltaPosition, setFullNameDeltaPosition] = useState({
    x: 0,
    y: 0,
  });
  const [additionalInfoDeltaPosition, setAdditionalInfoDeltaPosition] =
    useState({ x: 0, y: 0 });

  const updateFullNameOutput = useCallback(() => {
    const concatName = `${firstName} ${lastName}`;
    setFullName(concatName);
  }, [firstName, lastName]);

  const updateAdditionalInfoOutput = useCallback(() => {
    const allLines = `${textLine1}, ${textLine2}, ${textLine3}`;
    setAdditionalInfo(allLines);
  }, [textLine1, textLine2, textLine3]);

  useEffect(() => {
    updateFullNameOutput();
  }, [updateFullNameOutput]);

  useEffect(() => {
    updateAdditionalInfoOutput();
  }, [updateAdditionalInfoOutput]);

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
        textLine1,
        setTextLine1,
        textLine2,
        setTextLine2,
        textLine3,
        setTextLine3,
        additionalInfo,
        fontSize,
        setFontSize,
        fontColor,
        setFontColor,
        fullNameDeltaPosition,
        setFullNameDeltaPosition,
        additionalInfoDeltaPosition,
        setAdditionalInfoDeltaPosition,
      }}
    >
      {props.children}
    </CardDetailsContext.Provider>
  );
}

export default CardDetailsContext;
