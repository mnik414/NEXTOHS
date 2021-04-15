const fs = require("fs");
const express = require("express");
const uuidv4 = require("uuid").v4;
var cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

var bcrypt = require("bcryptjs");

const port = 4000;

const users_str = fs.readFileSync("./.cache/users.json");
const userCache = JSON.parse(users_str.toString() || "[]");

setInterval(() => {
  // console.log("save cache...");
  fs.writeFileSync("./.cache/users.json", JSON.stringify(userCache));
}, 1000);

app.get("/", (req, res) => {
  res.send("SERVER READY!");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body || {};

  const err = [];
  if (!username) err.push("username");
  if (!email) err.push("email");
  if (!password) err.push("password");

  if (err.length > 0) {
    res.status(500).send({ err: `${err.toString()} required!` });
    return;
  }

  // gen uid
  const uid = uuidv4();

  // hash pw
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(password, salt);

  userCache.push({ uid, username, email, password: hash });
  res.send({ uid });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body || {};

  const err = [];
  if (!username) err.push("username");
  if (!password) err.push("password");

  if (err.length > 0) {
    res.status(500).send({ err: `${err.toString()} required!` });
    return;
  }

  const userInfo = userCache.find(
    (user) =>
      user.username == username && bcrypt.compareSync(password, user.password)
  );

  if (!userInfo) {
    res.status(500).send({ err: "MISMATCH" });
    return;
  }

  res.send({ uid: userInfo.uid });
});

// app.post("/me/:uid", (req, res) => {
//   const { uid } = req.params;
//   const userInfo = userCache.find((user) => user.uid == uid);
//   if (userInfo) res.send({ uid: userInfo.uid, username: userInfo.username });
//   else throw "NO USER FOUND!";
// });

// app.post("/logout/:uid", (req, res) => {
//   const { uid } = req.params;
//   userIndex = userCache.findIndex((user) => user.uid == uid);
//   if (userIndex != -1) {
//     userCache.splice(userIndex, 1);
//     res.send({ uid });
//   } else throw "NO USER FOUND!";
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
