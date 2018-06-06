'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  res.clearCookie('accessToken');
  res.render('logout', { username: req.user.name });
}));


module.exports = router;
