### WORK_FLOW
### STEP # 1 : 
Create a server and also you can add some other routes
```import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### STEP # 2
Hosting => const port = process.env.PORT || 3000;

### STEP # 3
Installation
``` 
npm i -g nodemon
##---- OR ----##
npm i nodemon
```
### STEP # 4
Package.json => "start": "nodemon server.mjs" 

if you makes a change in your code, not required to start your server again and again!

Auto Detected run with ip:3000 , localhost:3000 

