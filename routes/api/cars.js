const express = require('express');
const router = express.Router();

// @desc    Return all cars
router.get('/', (req, res) => res.send('cars route'));

module.exports = router;