import React from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmationPage from "../views/ConfirmationPage";
import CreateCardPage from "../views/CreateCardPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<CreateCardPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Routes>
  );
}

export default Router;
