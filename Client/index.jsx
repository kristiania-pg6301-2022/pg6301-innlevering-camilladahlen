import * as ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Question() {
  return <h1>This should show the question</h1>;
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
      <div>
        <Link to={"answer"}>Answer template</Link>
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
        <Route path={"/question"} element={<Question />} />
        <Route path={"/answer"} element={<Answer />} />
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<Application />, document.getElementById("app"));
