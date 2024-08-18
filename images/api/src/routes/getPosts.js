const express = require('express');
const router = express.Router();
const posts = require('./posts');

let nextId = 1;

router.get('/', (req, res) => {
    res.json(posts);
});

router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = posts.find(p => p.id === postId);

    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.json(post);
});

router.post('/', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    const newPost = {
        id: nextId++,
        title,
        content,
        createdAt: new Date()
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

module.exports = router;