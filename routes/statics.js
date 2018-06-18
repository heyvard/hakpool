'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/rules', asyncHandler(async (req, res) => {
  res.render('rules', { user: req.user });
}));

router.get('/groups', asyncHandler(async (req, res) => {
  res.render('groups', { user: req.user });
}));

module.exports = router;
