'use strict';

const express = require('express');
const asyncHandler = require('express-async-handler');
const config = require('config');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  res.render('rules', { user: req.user, visInnskudd: config.get('appname') === "em2021-betpool", });
}));


module.exports = router;
