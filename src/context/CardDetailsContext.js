import React, { createContext, useState, useEffect, useCallback } from "react";

const CardDetailsContext = createContext();

export function CardDetailsContextProvider(props) {
  const [textAreaAddlInfo, setTextAreaAddlInfo] = useState("");
  const [woodType, setWoodType] = useState("spruce");
  const [fullName, setFullName] = useState("");
  const [fullNameFontSize, setFullNameFontSize] = useState("24px");
  const [addlInfoFontSize, setAddlInfoFontSize] = useState("18px");
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
    setFullName(fullName);
  }, [fullName]);

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
        fullName,
        setFullName,
        fullNameFontSize,
        setFullNameFontSize,
        addlInfoFontSize,
        setAddlInfoFontSize,
        fontColor,
        setFontColor,
        woodType,
        setWoodType,
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
