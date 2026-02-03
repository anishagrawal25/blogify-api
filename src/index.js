// src/index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Import Blogify routes
const postRoutes = require('./routes/posts.routes');

// --- Our Custom Middleware ---
const requestLogger = (req, res, next) => {
  console.log(`Request Received: ${req.method} ${req.originalUrl}`);
  next();
};


app.use(requestLogger);


app.get('/about', (req, res) => {
  res.send('About Page!');
});

app.get('/error-test', (req, res, next) => {
  // We create a new Error object.
  const myError = new Error('This is a deliberately thrown error!');
  
  // We pass it to next(), which sends it to our error handler.
  next(myError);
});
// THE ERROR HANDLING MIDDLEWARE (MUST BE LAST!)
const errorHandler = (err, req, res, next) => {
  // 1. Log the error for the developer (on the server console)
  console.error(err.stack); // Shows the full error details

  // 2. Send a clean, generic JSON response to the client
  res.status(500).json({
    success: false,
    error: 'Internal Server Error' 
  });
};

// Mount it at the very end of the file
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
