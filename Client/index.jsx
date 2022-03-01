import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useLoader } from "./useLoader";
import { postJSON, fetchJSON } from "./http";

function QuizComponent({ reload }) {
  const [question, setQuestion] = useState();
  const [answer, setAnswer] = useState();

  async function handleLoadQuestion() {
    setQuestion(await fetchJSON("/api/question"));
  }

  function handleReload() {
    setQuestion(undefined);
    reload();
  }

  useEffect(() => {
    handleLoadQuestion();
  }, []);

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
    />
  );
}

///This function actually renders the question with all the answers etc.
function QuestionDisplay({ question, answer, setAnswer, onReload }) {
  async function handleAnswer(answer) {
    const result = await postJSON("/api/question", { id: question.id, answer });
    setAnswer(await result.text());
    onReload();
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
      <button>New question</button>
    </div>
  );
}

function PageLinks() {
  return (
    <div>
      <div>
        <Link to={"/question"}>Random question</Link>
      </div>
    </div>
  );
}

function FrontPage() {
  return (
    <div>
      <h1>Quiz-app!</h1>
      <PageLinks />
    </div>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/question"} element={<QuizComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<Application />, document.getElementById("app"));
