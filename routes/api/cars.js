const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('cars route'));

module.exports = router;