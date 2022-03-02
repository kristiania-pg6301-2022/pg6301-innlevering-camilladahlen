import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { QuizComponent } from "../quizComponent";
import { fetchJSON, submitJSON } from "../http";

const question = {
  id: 1,
  question: "Are you happy?",
  category: "personal",
  answers: {
    answer_a: "Yes",
    answer_b: "No",
    answer_c: "Maybe",
  },
};

class QuizApi {
  async getQuestion() {
    return question;
  }

  async checkAnswer(id, answer) {
    return "true";
  }
}
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("A quiz component", () => {
  it("looks the same", async () => {
    await act(async () => {
      await ReactDOM.render(
        <QuizComponent quizApi={new QuizApi()} />,
        container
      );
    });
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("shows a question", async () => {
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      await ReactDOM.render(
        <QuizComponent quizApi={new QuizApi()} />,
        container
      );
    });
    expect(container.textContent).toContain(question.question);
  });
});
