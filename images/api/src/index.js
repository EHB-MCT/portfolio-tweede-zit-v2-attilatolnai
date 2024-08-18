const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

let posts = [];

app.get("/", (req, res) => {
    res.send({ message: "hello world"})
})

app.get("/posts", (req, res) =>{
    res.json(posts);
});

app.post("/posts", (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({error: "Title and content are required" });
    }

    const newPost = {
        id: posts.length +1,
        title,
        content,
        createdAt: new Date()
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.get("/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
});

app.listen(port, (err) => {
    if(!err) {
        console.log(`server running on port ${port}`);
    }
    else{
        console.error(err)
    }
});