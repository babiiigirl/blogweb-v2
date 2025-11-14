const express = require('express')
const app = express()
const cors = require("cors");
const port = 8080
const { BlogPosts } = require("./BlogPosts");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(cors());
app.use(jsonParser);

app.get("/posts", (req, res) => {
  res.json(BlogPosts);
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = BlogPosts.find((post) => post.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
});

app.post("/newpost", jsonParser, (req, res) => {
  const post = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
  };
  BlogPosts.push(post);
  res.status(200).send({ message: "Posted successful" });
});

app.post("/login", jsonParser, (req, res) => {
  const creds = {
    username: req.body.username,
    password: req.body.password,
  };
  if (creds.username === "admin" && creds.password === "123") {
    res.status(200).send({ message: "Login successful" });
  } else {
    res.status(401).send({ message: "Login failed" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
