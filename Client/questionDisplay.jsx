import React, { useState } from "react";

// Component for rendering a question, as well as
export function QuestionDisplay({ question, quizApi, reload }) {
  const [answer, setAnswer] = useState();
  if (!answer) {
    return (
      <div>
        <h2>{question.question}</h2>
        {Object.keys(question.answers) //This gives us a stream of all the keys in the object.answers properties (remember, a JS object is just a key-value mapping)
          .map((answer) => (
            <div key={answer}>
              <button
                onClick={async () =>
                  setAnswer(await quizApi.checkAnswer(question.id, answer))
                }
              >
                {question.answers[answer]}
              </button>
            </div>
          ))}
      </div>
    );
  }
  return (
    <div>
      <p>You answered {answer === "true" ? "correctly" : "incorrectly"}</p>
      <button onClick={() => reload()}>New question</button>
    </div>
  );
}
