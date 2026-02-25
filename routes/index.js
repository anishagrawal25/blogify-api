const express = require('express');
const router = express.Router();

const userRouter = require('./user.routes');
const postRouter = require('./posts.routes');

router.get('/about', (req, res) => {
    res.send('about page');
});

router.get('/error-test', (req, res, next) => {
    next(new Error('Internal storage error'));
});

router.use('/users', userRouter);
router.use('/posts', postRouter);

module.exports = router;
