import { useLoader } from "./useLoader";
import { fetchJSON } from "./http";
import React from "react";
import { QuestionDisplay } from "./questionDisplay";

export function QuizComponent({ quizApi }) {
  //This will automatically load/fetch the needed data for us.
  const { error, data: question } = useLoader(() => quizApi.getQuestion(), []);

  if (error) {
    return <div>Something went wrong: {error.toString()}</div>;
  }

  if (!question) {
    return <h1>Loading question...</h1>;
  }

  //When the question is loaded correctly, we can render it
  return <QuestionDisplay question={question} quizApi={quizApi} />;
}

export function FrontPage({ quizApi }) {
  return (
    <div>
      <h1>Quiz-app!</h1>
      <QuizComponent quizApi={quizApi} />
    </div>
  );
}
