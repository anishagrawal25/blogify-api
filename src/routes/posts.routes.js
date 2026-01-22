const express = require('express');

// Create a router instance (mini app)
const router = express.Router();

// GET /api/v1/posts
router.get('/', (req, res) => {
  res.send('Fetching all blog posts from the modular router!');
});

// POST /api/v1/posts
router.post('/', (req, res) => {
  res.send('Creating a new blog post...');
});

// Export the router
module.exports = router;
