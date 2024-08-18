const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Import the routes for posts
const postsRoutes = require("./routes/getPosts");
const putPostsRoutes = require("./routes/putPosts");
const delPostsRoutes = require("./routes/delPosts");

// Use the routes for /posts
app.use("/posts", postsRoutes);
app.use("/posts", putPostsRoutes);
app.use("/posts", delPostsRoutes);

app.get("/", (req, res) => {
    res.send({ message: "hello world" });
});

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server running on port ${port}`);
    } else {
        console.error(err);
    }
});