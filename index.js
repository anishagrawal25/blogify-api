require('dotenv').config();
const mongoose = require("mongoose");
const express = require('express');
const cors = require('cors');

const {requestLogger,errorHandler} =require('./middleware')
const minRouter = require('./routes')


const app = express();
const PORT = process.env.PORT || 3000;

// Routes & Middleware


// --------------------
// Global Middleware
// --------------------
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// --------------------
// Routes


// API routes

app.use('/api/v1', minRouter);

// Error test route


// --------------------
// Error Handler (ALWAYS LAST)
// --------------------
app.use(errorHandler);


// --------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);

});
