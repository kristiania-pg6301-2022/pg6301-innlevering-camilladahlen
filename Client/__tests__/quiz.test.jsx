import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { QuizComponent } from "../quizComponent";
import { QuizApi } from "../quizApi";

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
const checkAnswerMock = jest
  .spyOn(QuizApi.prototype, "checkAnswer")
  .mockImplementation(() => {
    return "true";
  });
const getQuestionMock = jest
  .spyOn(QuizApi.prototype, "getQuestion")
  .mockImplementation(() => {
    return question;
  });

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

  it("changes state on submission of answers", async () => {
    await act(async () => {
      await ReactDOM.render(
        <QuizComponent quizApi={new QuizApi()} />,
        container
      );
    });

    await act(async () => {
      await Simulate.click(container.querySelector("button"));
    });

    expect(checkAnswerMock).toHaveBeenCalled();
    expect(container.innerHTML).toMatchSnapshot();
  });
});
