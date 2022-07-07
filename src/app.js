const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./utils/errorHandler');
const asyncHandler = require('./utils/asyncHandler');

const mainRouter = require('./routes/main');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use(cookieParser());
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', asyncHandler(mainRouter));
app.use('/login', asyncHandler(loginRouter));
app.use('/signup', asyncHandler(signupRouter));

app.use(errorHandler);

module.exports = app;
