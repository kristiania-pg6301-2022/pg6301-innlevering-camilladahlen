import React from "react";
import * as ReactDOM from "react-dom";
import { QuizApi } from "./quizApi";
import { Application } from "./application";

ReactDOM.render(
  <Application quizApi={new QuizApi()} />,
  document.getElementById("app")
);
