const express = require("express");
const parser = require("body-parser");
const users = require("./router/users");
const cors = require("cors");
const comments = require("./router/comments");
const connect = require("./db/db");
const dotenv = require("dotenv");
const posts = require("./router/posts");
const register = require("./router/register");
dotenv.config();
const port = 5454;

const app = express(); //server
app.use(cors());
app.use(parser.json()); //converts to string
app.use(parser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");

  next();
});
//converts everything back to object
app.use("/users", users);
app.use("/comments", comments);
app.use(register);
app.use("/posts", posts);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

connect();
app.get("/", (req, res) => {
  res.status(200).json({ message: "server is running" });
});
app.listen(port, () => {
  `Server running at http://localhost:${port}`;
});
