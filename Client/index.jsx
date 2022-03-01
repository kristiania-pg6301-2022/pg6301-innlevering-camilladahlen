import React, { useEffect, useState } from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function QuestionComponent() {
  const [question, setQuestion] = useState();
  async function handleLoadQuestion() {
    const res = await fetch("/api/question");
    setQuestion(await res.json());
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

  return <QuestionDisplay question={question} />;
}

///This function actually renders the question with all the answers etc.
function QuestionDisplay({ question }) {
  async function handleAnswer(answer) {
    const { id } = question;

    let res = await fetch("/api/question", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id, answer }),
    });

    if (res.getHeader("Correct-Answer") === "true") {
      console.log("This was the correct answer");
    }
  }
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

function Answer() {
  return <h1>This should show the answer</h1>;
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
        <Route path={"/question"} element={<QuestionComponent />} />
        <Route path={"/answer"} element={<Answer />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<Application />, document.getElementById("app"));
