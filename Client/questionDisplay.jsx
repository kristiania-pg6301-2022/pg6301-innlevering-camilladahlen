///This function actually renders the question with all the answers etc.
import React, { useState } from "react";

export function QuestionDisplay({ question, quizApi }) {
  const [answer, setAnswer] = useState();
  if (!answer) {
    return (
      <div>
        <h2>{question.question}</h2>
        {Object.keys(question.answers)
          .filter((a) => question.answers[a])
          .map((a) => (
            <div key={a}>
              <button
                onClick={async () =>
                  setAnswer(
                    await quizApi.checkAnswer(question.id, question.answers[a])
                  )
                }
              >
                {question.answers[a]}
              </button>
            </div>
          ))}
      </div>
    );
  }
  return (
    <div>
      <p>You answered {answer === "true" ? "correctly" : "incorrectly"}</p>
    </div>
  );
}
