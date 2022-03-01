import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";

function AnswerQuestion() {

    const [question, setQuestion] = useState();

    useEffect(async () => {
        const res = await fetch("/api/question");
        setQuestion(await res.json());
    }, []);

    if (!question) return <div>Loading...</div>;

    return (
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

export function QuizApplication() {
    return <Routes>
        <Route path={"/"} element={<AnswerQuestion/>}>
        </Route>
    </Routes>
}