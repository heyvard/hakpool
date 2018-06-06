'use strict';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const knexConfig = require('./knexfile.js');
const knex = require('knex')(knexConfig);
const session = require('./middleware/session');
const exphbs = require("express-handlebars");

knex.migrate.latest([knexConfig]);


const upcomingMatchesRouter = require('./routes/upcomingMatches');
const callbackRouter = require('./routes/callback');
const leaderboardRouter = require('./routes/leaderboard');
const pastMatchesRouter = require('./routes/pastMatches');
const rulesRouter = require('./routes/rules');
const logoutRouter = require('./routes/logout');

const app = express();

const env = process.env.NODE_ENV || 'development';

const forceSsl = (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(['https://', req.get('Host'), req.url].join(''));
  }
  return next();
};


if (env === 'production') {
  app.use(forceSsl);
}

// view engine setup

app.engine("hbs", exphbs({
  defaultLayout: "main",
  extname: ".hbs",
  helpers: require("./lib/helpers.js").helpers, // same file that gets used on our client
  partialsDir: "views/partials/", // same as default, I just like to be explicit
  layoutsDir: "views/layouts/" // same as default, I just like to be explicit
}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.all('/*', session);

app.use('/', upcomingMatchesRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/pastMatches', pastMatchesRouter);
app.use('/callback', callbackRouter);
app.use('/logout', logoutRouter);
app.use('/rules', rulesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
