import express from "express";
import * as path from "path";
import * as Questions from "./questions.js";

//app is the "program" that will run on our server
const app = express();

//Should return a random question with {id, category, question, answers}
app.get("/api/question", (req, res) => {
  const question = Questions.randomQuestion();
  return res.json(question);
});

//Should take in {id, answer} and return true or false, depending on answer
app.post("/api/question");
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
