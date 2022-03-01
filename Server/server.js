import express from "express";
import * as path from "path";
import * as Questions from "./questions.js";
import bodyParser from "body-parser";

//app is the "program" that will run on our server
const app = express();
app.use(bodyParser.json()); //Need this so that our server can parse json-data in body

//Should return a random question with {id, category, question, answers}
app.get("/api/question", (req, res) => {
  const { id, category, question, answers } = Questions.randomQuestion();
  return res.json({ id, category, question, answers });
});

//Should take in {id, answer} and return true or false, depending on answer
app.post("/api/question", (req, res) => {
  const { id, answer } = req.body;
  if (Questions.isCorrectAnswer(id, answer)) {
    //return res.json({ result: "correct" });
    res.status(200).send("true");
  } else {
    //return res.json({ result: "incorrect" });
    res.status(200).send("false");
  }
});

app.use(express.static("../Client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.resolve("../Client/dist/index.html"));
  } else {
    next();
  }
});

//actually starts our server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
