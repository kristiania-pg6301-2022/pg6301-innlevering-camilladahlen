import express from "express";

//app is the "program" that will run on our server
const app = express();

//actually starts our server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on http://localhost:${server.address().port}`);
});
