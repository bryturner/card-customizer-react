import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateCardPage from "../views/CreateCardPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<CreateCardPage />} />
    </Routes>
  );
}

export default Router;
