'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  res.render('rules', { username: req.user.name });
}));


module.exports = router;
