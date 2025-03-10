// server.js
const express = require('express');
const User = require('./User'); // Import User model

const app = express();
const PORT = 3000;

// Route to get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users
    res.json(users); // Send JSON response
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
