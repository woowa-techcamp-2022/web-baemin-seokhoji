import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import errorHandler from '@src/utils/errorHandler';
import asyncHandler from '@src/utils/asyncHandler';
import { loginRouter, mainRouter, signupRouter } from '@src/routes';

const app = express();

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

export default app;
