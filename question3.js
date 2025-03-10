// Import the Express module
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route '/test' that sends a JSON response
app.get('/test', (req, res) => {
  res.json({ message: 'Express is working! Write your full name' });
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// PORT 3000