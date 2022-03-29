import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import GlobalStyle from "./styles/Global.styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
