import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Requesting Ip's are", req.ip);
  
  res.send("Hello World!" + new Date().toLocaleString());
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
