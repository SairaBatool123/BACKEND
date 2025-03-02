import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  console.log("Hi Terminal Of About Page");
  res.send("Hello World from About Page");
});

// ###### if i write this code on the above of the about route then that route will not working because it read the code line by line  ###### //

// app.get("/:id", (req, res) => {
//   console.log(`Hello World from ${req.params.id}`);
//   res.send(`Hello World from ${req.params.id}`);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
