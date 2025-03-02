### WORK_FLOW
### STEP # 1 : INSTALLATION
npm init (Creating Package.json)

npm i express (Creating package_lock.json + node_modules)

```bash
npm init
npm i express
```

### STEP # 2
Package.json => "start" : "node server.mjs"

### STEP # 3
require => common.js
change this thing with quick fixed (module.js)

### STEP # 4
```bash
ipconfig
```
192.168.2.108 run with ip:3000 , localhost:3000

### STEP # 5
log req.ip (make sure all computer internet are same)

### STEP # 6
.gitignore (folder) and add node_modules

```
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log("Requesting Ip's are", req.ip);
  
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```
