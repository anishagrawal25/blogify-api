const express = require('express');
const router = express.Router();

// Import controllers
const {
  getAllPosts,
  getPostById
} = require('../controllers/posts.controller');

// Main Blogify Routes
router.get('/', getAllPosts);
router.get('/:id', getPostById);

// Test route (optional)
router.post('/test-body', (req, res) => {
  console.log('Received body:', req.body);
  res.status(200).json({ status: 'success', received: req.body });
});

module.exports = router;
