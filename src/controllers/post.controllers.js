const express = require('express')
const router =express.Router()
const postController = require('./posts.controllers')
router.get('/',postController.getAllPosts)
