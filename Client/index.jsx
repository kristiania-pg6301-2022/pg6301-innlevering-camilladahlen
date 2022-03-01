import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React, { useEffect, useState } from "react";

function FrontPage() {
    return <div>
        <h1>Questions</h1>
        <ul>
            <li><Link to={"/question"}>Show question</Link></li>
        </ul>
    </div>
}

function AnswerQuestion() {

    const [question, setQuestion] = useState();

    useEffect(async () => {
        const res = await fetch("/api/question");
        setQuestion(await res.json());
    }, []);

    if (!question) return <div>Loading...</div>;

    return(
        <div>
            <h1>{question.question}</h1>
            <h3>Answers: </h3>
            {Object.keys(question.answers)
                .filter((a) => question.answers[a])
                .map((answer) => (
                    <div key={answer}>
                        <p>{question.answers[answer]}</p>
                    </div>
                ))}
        </div>
    );
}

function QuizApplication() {
    return <Routes>
        <Route path={"/"} element={<AnswerQuestion/>}>
        </Route>
    </Routes>
}

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>} />
            <Route path={"/question/*"} element={<QuizApplication />} />
        </Routes>
    </BrowserRouter>;
}

ReactDOM.render(<App />, document.getElementById("app"));
