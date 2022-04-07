import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CardDetailsContextProvider } from "./context/CardDetailsContext";
import Router from "./router/Router";
import GlobalStyle from "./styles/Global.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <CardDetailsContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CardDetailsContextProvider>
    </>
  );
}

export default App;
