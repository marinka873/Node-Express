const express = require('express');
const router = express.Router();

// Render the registration page
router.get('/', (req, res) => {
  res.render('login', { title: 'Login Page' });
});

module.exports = router;
