const express = require('express');
const router = express.Router();
const posts = require('./posts');


router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10);

    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }

    posts.splice(postIndex, 1);

    res.status(204).send();
});

module.exports = router;
