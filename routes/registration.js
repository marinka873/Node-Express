const express = require('express');
const router = express.Router();

// Render the registration page
router.get('/', (req, res) => {
  res.render('registration', { title: 'Registration Page' });
});

module.exports = router;
