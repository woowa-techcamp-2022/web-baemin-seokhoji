const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const errorHandler = require('./utils/errorHandler');
const asyncHandler = require('./utils/asyncHandler');
const { isNotLoggedIn } = require('./middleware/loginMiddleware');

const mainRouter = require('./routes/main');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');
const userRouter = require('./routes/user');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, '../public')));
app.use(
	session({
		name: 'web-bamin-seokhoji',
		secret: 'bamin',
		resave: true,
		saveUninitialized: true,
		cookie: { maxAge: 1000 * 60 * 5 },
		rolling: true,
	}),
);
app.use(cookieParser());
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/', asyncHandler(mainRouter));
app.use('/login', isNotLoggedIn, asyncHandler(loginRouter));
app.use('/signup', isNotLoggedIn, asyncHandler(signupRouter));
app.use('/user', asyncHandler(userRouter));

app.use('*', (_, __, next) => {
	next('존재하지 않는 페이지입니다.');
});

app.use(errorHandler);

module.exports = app;
