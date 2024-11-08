const express = require('express');
const router = express.Router();

// Render the home page
router.get('/', (req, res) => {
  res.render('home', { 
    title: 'Home Page',
     message: 'Welcome to the Home Page!'
    });
});

module.exports = router;
