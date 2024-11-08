const express = require('express');
const router = express.Router();

// Import individual route files
const registrationRoutes = require('./register');
const loginRoutes = require('./login');
const homeRoutes = require('./home');

// Use the routes
router.use('/registration', registrationRoutes);
router.use('/login', loginRoutes);
router.use('/', homeRoutes);

module.exports = router;
