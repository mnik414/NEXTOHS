const express = require("express");
const uuidv4 = require("uuid").v4;
var cors = require("cors");
const app = express();
app.use(cors());

const port = 4000;

const userCache = [];

app.get("/", (req, res) => {
  res.send("READY!");
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  const uid = uuidv4();
  userCache.push({ uid, username, password });
  res.send({ uid });
});

app.get("/me/:uid", (req, res) => {
  const { uid } = req.params;
  const userInfo = userCache.find((user) => user.uid == uid);
  if (userInfo) res.send({ uid: userInfo.uid, username: userInfo.username });
  else throw "NO USER FOUND!";
});

app.get("/logout/:uid", (req, res) => {
  const { uid } = req.params;
  userIndex = userCache.findIndex((user) => user.uid == uid);
  console.log(userIndex);
  if (userIndex != -1) {
    userCache.splice(userIndex, 1);
    res.send({ uid });
  } else throw "NO USER FOUND!";
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
