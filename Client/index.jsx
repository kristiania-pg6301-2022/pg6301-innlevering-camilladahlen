import * as ReactDOM from "react-dom";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React from "react";
import {QuizApplication} from "./quizApplication";

function FrontPage() {
    return <div>
        <h1>Questions</h1>
        <ul>
            <li><Link to={"/question"}>Show question</Link></li>
        </ul>
    </div>
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
