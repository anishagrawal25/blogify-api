const express = require('express');
const router = express.Router();

const { getAllPosts, getPostById } = require('../controllers/posts.controller');


// GET all posts
router.get('/', getAllPosts);

// GET post by ID
router.get('/:id', getPostById);

module.exports = router;
