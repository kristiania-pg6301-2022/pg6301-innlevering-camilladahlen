import { useLoader } from "./useLoader";
import { fetchJSON } from "./http";
import React, { useState } from "react";
import { QuestionDisplay } from "./questionDisplay";

export function QuizComponent({ quizApi }) {
  //This will automatically load/fetch the needed data for us.
  const [reload, setReload] = useState(0);
  const { error, data: question } = useLoader(
    () => quizApi.getQuestion(),
    [reload]
  );

  function doReload() {
    console.log("Should reload");
    setReload((reload) => {
      //Dumb hack for setting a new value on reload each time you toggle this function
      return reload === 0 ? 1 : 0;
    });
  }
  if (error) {
    return <div>Something went wrong: {error.toString()}</div>;
  }

  if (!question) {
    return <h1>Loading question...</h1>;
  }

  //When the question is loaded correctly, we can render it
  return (
    <QuestionDisplay
      question={question}
      quizApi={quizApi}
      reload={() => doReload()}
    />
  );
}

export function FrontPage({ quizApi }) {
  return (
    <div>
      <h1>Quiz-app!</h1>
      <QuizComponent quizApi={quizApi} />
    </div>
  );
}
