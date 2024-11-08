const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const user = await User.create({ username, password, email });
    console.log(`User registered successfully! Username: ${username}`);
    res.redirect('/');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Registration failed. Please try again.');
  }
});

module.exports = router;
