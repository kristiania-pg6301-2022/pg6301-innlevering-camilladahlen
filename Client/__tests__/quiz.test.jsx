import React from "react";
import ReactDOM from "react-dom";
import { FrontPage } from "../quizApplication";

describe("quiz application", () => {
  it("shows a question", () => {
    const element = document.createElement("div");
    ReactDOM.render(<FrontPage />, element);
    expect(element.innerHTML).toMatchSnapshot();
  });
});
