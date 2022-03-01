import express from "express";
import * as path from "path";

//app is the "program" that will run on our server
const app = express();

app.use(express.static("..Client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api/")) {
    return res.sendFile(path.resolve("..Client/dist/index.html"));
  } else {
    next();
  }
});

//actually starts our server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
