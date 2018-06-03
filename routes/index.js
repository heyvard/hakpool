'use strict';

const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { username: req.user.name });
});

module.exports = router;
