const express = require('express');
const router = express.Router();
// 1. Import the validation functions you need
const { body } = require('express-validator');
const userController= require('../controllers/users.controller');
router.use((req,res,next)=>{
    console.log('user router hit:',req.method,req.originalUrl);
    next();
});

// ... import your user controller ...


// 2. Define your validation rules as an array
const registrationRules = [
  // email must be a valid email
  body('email').isEmail().withMessage('Please provide a valid email address'),
  
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
];
router.get('/',(req,res)=>{
    res.json({
        message:"user route is working"

    });
});

// 3. Apply the rules as middleware to your route
router.post('/register', registrationRules, userController.registerUser);

module.exports = router;