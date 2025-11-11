const express = require('express')
const app = express()
const cors = require("cors");
const port = 8080
const { BlogPosts } = require("./BlogPosts");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

app.use(cors());


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

app.post("/api/post", jsonParser, (req, res) => {
  const post = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
  };
  BlogPosts.BlogPosts.push(post);
  res.status(200).send({ message: "Posted successful" });
});


app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
