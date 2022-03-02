import { useLoader } from "./useLoader";
import { fetchJSON, postJSON } from "./http";
import React, { useState } from "react";

function QuizComponent({ reload }) {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  async function handleLoadQuestion() {
    setQuestion(await fetchJSON("/api/question"));
  }

  function handleReload() {
    setQuestion(undefined);
    setAnswer(undefined);
    reload();
  }

  if (!question) {
    return (
      <div>
        <button onClick={handleLoadQuestion}>Load a new question</button>
      </div>
    );
  }

  return (
    <QuestionDisplay
      question={question}
      answer={answer}
      setAnswer={setAnswer}
      onReload={handleReload}
    />
  );
}

///This function actually renders the question with all the answers etc.
function QuestionDisplay({ question, answer, setAnswer, onReload }) {
  async function handleAnswer(answer) {
    const result = await postJSON("/api/question", { id: question.id, answer });
    setAnswer(await result.text());
  }

  if (!answer) {
    return (
      <div>
        <h2>{question.question}</h2>
        {Object.keys(question.answers)
          .filter((a) => question.answers[a])
          .map((a) => (
            <div key={a}>
              <button onClick={() => handleAnswer(a)}>
                {question.answers[a]}
              </button>
            </div>
          ))}
      </div>
    );
  }
  return (
    <div>
      <p>You answered {answer === "true" ? "correctly" : "incorrect"}</p>
      <button onClick={onReload}>New question</button>
    </div>
  );
}

export function FrontPage() {
  //const { reload } = useLoader(async () => fetchJSON("/"));
  return (
    <div>
      <h1>Quiz-app!</h1>
      {/*<QuizComponent reload={reload} />*/}
    </div>
  );
}
