const express = require('express');
const router = express.Router();
const posts = require('./posts');

router.put('/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const { title, content } = req.body;

    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    posts[postIndex] = {
        ...posts[postIndex],
        title,
        content,
        updatedAt: new Date()
    };

    res.json(posts[postIndex]);
});

module.exports = router;
