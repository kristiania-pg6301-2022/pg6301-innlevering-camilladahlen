import express from "express";
import * as path from "path";
import {randomQuestion} from "./questions.js";

//app is the "program" that will run on our server
const app = express();

app.get("/api/question", (req, res) => {
    const question = randomQuestion();
    res.json(question);
});

app.post("/api/question", (req, res, next) => {
    res.sendStatus(401);
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
const server = app.listen(process.env.PORT || 0, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
