const express = require("express");
const parser = require("body-parser");
const users = require("./router/users");
const comments = require("./router/comments");
const connect = require("./db/db");
const dotenv = require("dotenv");
const posts = require("./router/posts");
const { tokenGenerate, checkToken } = require("./authentication/jwt");
const register = require("./router/register");
dotenv.config();
const port = 5454;

const app = express(); //server
app.use(parser.json()); //converts to string
app.use(parser.urlencoded({ extended: true }));
//converts everything back to object
app.use("/users", users);
app.use("/comments", comments);
app.use(register);
// app.use("/posts", comments);

app.use("/posts", posts);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});
connect();
app.get("/", (req, res) => {
  const token = tokenGenerate("elbeg", "dummyId");
  res.status(200).json({ message: "server is running" });
});
app.listen(port, () => {
  `Server running at http://localhost:${port}`;
});
