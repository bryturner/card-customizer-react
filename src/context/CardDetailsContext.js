import React, { createContext, useState, useEffect, useCallback } from "react";

const CardDetailsContext = createContext();

export function CardDetailsContextProvider(props) {
  const [addlInfo, setAddlInfo] = useState("");
  const [woodType, setWoodType] = useState("spruce");
  const [fullName, setFullName] = useState("");
  const [fullNameFontSize, setFullNameFontSize] = useState("24px");
  const [fullNameFontStyle, setFullNameFontStyle] = useState("serif");
  const [fullNameFontWeight, setFullNameFontWeight] = useState("500");
  const [addlInfoFontSize, setAddlInfoFontSize] = useState("18px");
  const [addlInfoFontStyle, setAddlInfoFontStyle] = useState("18px");
  const [addlInfoFontWeight, setAddlInfoFontWeight] = useState("18px");
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
    setAddlInfo(addlInfo);
  }, [addlInfo]);

  useEffect(() => {
    updateFullNameOutput();
  }, [updateFullNameOutput]);

  useEffect(() => {
    updateAddlInfoOutput();
  }, [updateAddlInfoOutput]);

  //   Change addl info text area name
  return (
    <CardDetailsContext.Provider
      value={{
        fullName,
        setFullName,
        fullNameFontSize,
        setFullNameFontSize,
        fullNameFontStyle,
        setFullNameFontStyle,
        fullNameFontWeight,
        setFullNameFontWeight,
        addlInfo,
        setAddlInfo,
        addlInfoFontSize,
        setAddlInfoFontSize,
        addlInfoFontStyle,
        setAddlInfoFontStyle,
        addlInfoFontWeight,
        setAddlInfoFontWeight,
        fontColor,
        setFontColor,
        woodType,
        setWoodType,
        fullNameDeltaPosition,
        setFullNameDeltaPosition,
        addlInfoDeltaPosition,
        setAddlInfoDeltaPosition,
      }}
    >
      {props.children}
    </CardDetailsContext.Provider>
  );
}

export default CardDetailsContext;
