'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  res.clearCookie('accessToken');
  res.render('logout', { user: req.user });
}));


module.exports = router;
