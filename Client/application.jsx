import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FrontPage } from "./quizComponent";
import React from "react";

export function Application({ quizApi }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage quizApi={quizApi} />} />
      </Routes>
    </BrowserRouter>
  );
}
